import { useGetPopular } from "../hooks/DataHooks";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import MetaData from "../components/MetaData";
import HomeHeader from "../components/home/HomeHeader";
import MediaList from "../components/home/MediaList";
import { useAuthorization } from "../hooks/AuthnHooks";
import { useEffect, useState } from "react";
import { Media } from "../lib/api/consumat-io";
import { MediaType } from "../types/media";

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: { session: await getSession(context) },
});

const Home = () => {
  const [session] = useAuthorization();
  const [headerImageSource, setHeaderImageSource] = useState("");

  if (!session) return null;

  const {
    data: popularMovieData,
    loading: popularMovieLoading,
    error: popularMovieError,
  } = useGetPopular(MediaType.Movie, 1);

  const {
    data: popularTvData,
    loading: popularTvLoading,
    error: popularTvError,
  } = useGetPopular(MediaType.Tv, 1);

  useEffect(() => {
    if (popularMovieData && popularTvData) {
      const movieTvArray: Media[] = [
        ...popularMovieData.popular.results,
        ...popularTvData.popular.results,
      ].filter((item) => item.backdropPath !== null);
      const randomItem =
        movieTvArray[Math.floor(Math.random() * movieTvArray.length)];
      setHeaderImageSource(randomItem?.backdropPath);
    }
  }, [popularMovieData, popularTvData]);

  return (
    <div className="md:px-4">
      <MetaData title="consumat.io | Home" />

      <HomeHeader backgroundImageSource={headerImageSource} />

      <MediaList
        title="POPULAR MOVIES"
        items={popularMovieData?.popular.results}
        loading={popularMovieLoading}
        error={popularMovieError}
      />

      <MediaList
        title="POPULAR TV SHOWS"
        items={popularTvData?.popular.results}
        loading={popularTvLoading}
        error={popularTvError}
      />
    </div>
  );
};

export default Home;
