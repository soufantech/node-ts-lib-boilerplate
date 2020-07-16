<div align="center">
  <img src="https://avatars2.githubusercontent.com/u/61063724?s=200&v=4" width="100px">
</div>

<br />

<div align="center">
  <h1>@soufantech/package-ts</h1>
  <p>A TypeScript boilerplate for building Node.js packages (and apps).</p>
</div>

<br />

<div align="center">

[![typescript-image]][typescript-url] [![jest-image]][jest-url] [![npm-image]][npm-url]

</div>

## Setup

Clone the project with `git clone --dissociate <THIS PROJECT GIT URI> <YOUR PROJECT NAME>`;

If you intend to start from a clean slate, delete the `.git` directory to erase all version history and then start a new git repo with `git init`. In this case, You can also pass the `--depth 1` parameter to the above `git clone` command to avoid getting the entire git history (it will only get the latest commit).

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

---

<div align="center">
  <sub>Built with ❤︎ by <a href="http://soufan.com.br">SouFan</a>
</div>

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[npm-image]: https://img.shields.io/npm/v/@soufantech/package-ts.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@soufantech/package-ts "npm"

[jest-image]: https://img.shields.io/badge/tested_with-jest-99424f.svg?style=for-the-badge&logo=jest
[jest-url]: https://github.com/facebook/jest "jest"
