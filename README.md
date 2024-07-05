# Test Task

This project is a simple React application that uses Redux for state management and Typescript for type checking. It includes a table component where you can add, edit, and delete entries. The application also includes a responsive design.

### Visit

You can try it out: https://test-task-flax-alpha.vercel.app/

## Setup instructions

### Clone the repository

Using SSH:

`git clone git@github.com:egijasp/TestTask.git`

Using HTTPS:

`git clone https://github.com/egijasp/TestTask.git`

Navigate to the project directory:

`cd TestTask`

### Install dependencies:

Run `npm install` to install dependencies.

### Run the application:

Run `npm run dev` for a dev server. Navigate to `http://localhost:5173/`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
