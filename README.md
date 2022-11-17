# BOOL Network Documentation Website

This is BOOL Network documentation website.

It is built with [docusaurus](https://docusaurus.io/).

- [Welcome](./docs/welcome.md)
  - **general**
  - [overview](./docs/general/01-overview.md)
  - [architecture](./docs/general/02-architecture.md)
  - [glossary](./docs/general/03-glossary.md)
  - [FAQ](./docs/general/04-FAQ.md)
  - **developer**
  - [validator](./docs/developer/validator.md)
  - [tee](./docs/developer/tee.md)
  - [relayer](./docs/developer/relayer.md)
    - **API**
    - [constant](./docs/developer/api/constant.md)
    - [error](./docs/developer/api/error.md)
    - [extrinsics](./docs/developer/api/extrinsics.md)
    - [storage](./docs/developer/api/storage.md)
  - **tools**
    - [wallet](./docs/tools/01-wallet.md)
    - [boolscan](./docs/tools/02-boolscan.md)
  - **testnet**
    - [join](./docs/testnet/01-join.md)
    - [staking](./docs/testnet/02-staking.md)
    - [device-provider](./docs/testnet/03-device-provider.md)
    - [bridge-provider](./docs/testnet/04-bridge-provider.md)

## Clone the Repo

```bash
git clone https://github.com/boolnetwork/docs.git docs && \
cd docs
```

Install [yarn](https://yarnpkg.com/en/).

In `website` folder:

```bash
yarn install
```

## Preview the Site

```bash
yarn start
```

Then you should be able to preview the website at `http://localhost:3000/` in your browser.

## Docs

All the documents go into the `docs` folder.

To add a document:

- add `Basics` and `Integrate` to the folder: `docs/basics` and `docs/integrate`
- add the path of the folder to the `sidebars.json` file
