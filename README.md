# ts-boilerplate

A TypeScript Node boilerplate.

This boilerplate is suitable for building npm packages in pure TypeScript targeting the Node.js >=10 runtime.

## Step-by-step

1. Clone with `git clone --dissociate <THIS PROJECT GIT URI> <YOUR PROJECT NAME>`;
2. Update `author`, `name` and `version` on `package.json`;
3. Run `yarn` to install packages;
4. Delete or replace demo files: `rm src/index.ts src/greetings.ts src/__tests__/greetings.test.ts`;
5. Rewrite this very `README.md`;
6. Fine-tune configuration according to project needs;

## Features

- [x] TypeScript compiling with sensible configuration;
- [x] Support for running TypeScript and Node in one go (via ts-node);
- [x] Support for re-running TypeScript and Node on file changes (via ts-node-dev);
- [x] Jest setup for TypeScript, including typechecking during tests (via ts-jest);
- [x] TypeScript types for Node and Jest;
- [x] TypeScript support for ESLint + Prettier (via typescript-eslint);
- [ ] Commit linter (via commitlint);
- [ ] Editor configuration;
