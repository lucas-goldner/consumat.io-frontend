# consumat.io-frontend

Frontend for https://github.com/alphahorizonio/consumat.io.

## Installation

🚧 This project is a work-in-progress! Instructions will be added as soon as it is usable. 🚧

## Contributing

To contribute, please use the [GitHub flow](https://guides.github.com/introduction/flow/).

To build and start a development version locally, run the following:

```shell
$ git clone https://github.com/alphahorizonio/consumat.io-frontend.git
$ yarn
$ yarn build
$ export API_URL="https://consumat-io-backend.herokuapp.com/"
$ export AUTH0_CLIENT_ID="your-client-id"
$ export AUTH0_CLIENT_SECRET="your-client-secret"
$ export AUTH0_DOMAIN="pojntfx.eu.auth0.com"
$ export NEXTAUTH_URL="http://localhost:3000/"
$ yarn dev
```

The frontend should now be available on [http://localhost:3000/](http://localhost:3000/). Whenever you change a source file, the frontend will automatically be re-compiled.

## License

consumat.io-frontend (c) 2021 Felix Pojtinger and contributors

SPDX-License-Identifier: AGPL-3.0
