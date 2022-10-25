# BOOL Network Documentation Website

This is BOOL Network documentation website.

It is built with [docusaurus](https://docusaurus.io/).

## Clone the Repo

```bash
git clone https://github.com/boolnetwork/docs.git docs && \
cd docs
```

## Install Dependencies

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
