# Next JS lab

Compare NextJS to Create React App.

## Evaluation criteria

- Initial setup
- Configuration / Customization
- Routing / Pages
- Dev workflow
  - TypeScript
- Production build output
- CSS handling
- Asset handling

Client side rendering (CSR) / Server side rendering (SSR) / Static site generation (SSG).

## NextJS

Some links.

- https://nextjs.org/
- https://nextjs.org/docs/getting-started
- https://nextjs.org/learn/foundations/about-nextjs

### Command history

## CRA

- https://create-react-app.dev/
- https://create-react-app.dev/docs/getting-started/
- https://reactjs.org/docs/create-a-new-react-app.html
  - https://reactjs.org/docs/glossary.html#single-page-application (CSR only?)
- https://create-react-app.dev/docs/adding-images-fonts-and-files
- https://create-react-app.dev/docs/code-splitting (Only router reference)
- https://create-react-app.dev/docs/pre-rendering-into-static-html-files (SSG?)

### Command history

```sh
# Check the options
npx create-react-app --help

# Create new app from typescript template
npx create-react-app --template typescript cra-example-typescript
cd cra-example-typescript
npm start
```

Note: `--template cra-template-typescript` and `--template typescript` results in the same thing.

```sh
# Build production bundle
npm run build

# Requires `serve` to be installed (`npm install -g serve`)
serve build
```

### Result

- Without ejecting the project is fairly clean. 👍

Dev workflow with all defaults.

- Live reload css works. 👍
- Live reload react component works. 👍
- Tests setup by default. 👍
- Importing `.svg` files "just work". 👍
- `.css` can be imported. 👍
- `.module.css` works as expected. 👍
- Builtin storybook support?
  https://create-react-app.dev/docs/developing-components-in-isolation

Production bundle.

- Client side rendering 🤷‍♂️
  - Empty html initially
  - ... routing ...
