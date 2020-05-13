# package-ts

A TypeScript boilerplate for building Node packages.

## Setup

Clone the project with `git clone --dissociate <THIS PROJECT GIT URI> <YOUR PROJECT NAME>`;

### **Required** overrides:

You **must**...

1. update `author`, `name` and `version` in `package.json`.
2. delete or replace demo files: `rm src/index.ts src/greetings.ts src/__tests__/greetings.test.ts`.
3. rewrite this `README.md`;

### **Optional** overrides:

You might want to...

- set the `license` field (default is `UNLICENSED`). You may also include a `LICENSE` file on the root folder.
- set the `publishConfig.access`to `public` if your package is not meant to be published as a private package.
- set the `private` field to `false` in order to publish the package.
- set the `repository` field.
- remove the `start` and `watch` commands along with the `ts-node` and `ts-node-dev` dependencies if your project is not intended to be run directly (i.e: imported as a library).
- remove the `test` command along with the `jest`, `@types/jest` and `ts-jest` dependencies if your project is not meant to include automated tests.
- tune `prettier` configuration on `package.json`.
- run `yarn upgrade` to generate a fresh `yarn.lock`.

In addition to `package.json`, you might also want to check...

- the TS settings in the `tsconfig.json` file.
- the `.npmignore` file for the files that will be ignored on publishing.
- the test runner options on the `jest.config.js` file.
- the linter rules in the `eslintrc.yml` file.
- the general editor configuration on the `.editorconfig` file.

## Todo:

- [ ] Add and configure semantic-release.
