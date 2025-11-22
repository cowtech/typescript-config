# @cowtech/typescript-config

[![Version](https://img.shields.io/npm/v/@cowtech/typescript-config.svg)](https://npm.im/@cowtech/typescript-config)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@cowtech/typescript-config)](https://libraries.io/npm/@cowtech%2Ftypescript-config)

CowTech TypeScript configuration

https://sw.cowtech.it/typescript-config


## Usage

```sh
npm install @cowtech/typescript-config
```

Then  extend it in your project's `tsconfig.json`:

```json
{
  "extends": "@cowtech/typescript-config",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Configuration Settings

### General Settings

| Setting            | Value        | Description                                                       |
| ------------------ | ------------ | ----------------------------------------------------------------- |
| [`target`][target] | `ESNext`     | Compile to the latest ECMAScript standard for maximum performance |
| [`lib`][lib]       | `["ESNext"]` | Include latest ECMAScript library features                        |

### Module Settings

| Setting                                                              | Value      | Description                                                |
| -------------------------------------------------------------------- | ---------- | ---------------------------------------------------------- |
| [`module`][module]                                                   | `NodeNext` | Use Node.js ESM module resolution for modern applications  |
| [`moduleResolution`][moduleResolution]                               | `NodeNext` | Enable Node.js 16+ module resolution algorithm             |
| [`skipLibCheck`][skipLibCheck]                                       | `true`     | Skip type checking of declaration files for faster builds  |
| [`esModuleInterop`][esModuleInterop]                                 | `true`     | Enable CommonJS/ES module interoperability                 |
| [`allowSyntheticDefaultImports`][allowSyntheticDefaultImports]       | `true`     | Allow default imports from modules without default exports |
| [`allowImportingTsExtensions`][allowImportingTsExtensions]           | `true`     | Allow importing `.ts` files directly                       |
| [`rewriteRelativeImportExtensions`][rewriteRelativeImportExtensions] | `true`     | Automatically rewrite import extensions                    |
| [`allowJs`][allowJs]                                                 | `false`    | Enforce TypeScript-only codebase for type safety           |

### Language Settings (Type Safety)

| Setting                                                    | Value   | Description                                                   |
| ---------------------------------------------------------- | ------- | ------------------------------------------------------------- |
| [`strict`][strict]                                         | `true`  | Enable all strict type checking options                       |
| [`strictNullChecks`][strictNullChecks]                     | `true`  | Enforce strict null and undefined checking                    |
| [`noImplicitAny`][noImplicitAny]                           | `true`  | Raise error on expressions with implied `any` type            |
| [`noUnusedLocals`][noUnusedLocals]                         | `true`  | Report errors on unused local variables                       |
| [`noUnusedParameters`][noUnusedParameters]                 | `true`  | Report errors on unused function parameters                   |
| [`useUnknownInCatchVariables`][useUnknownInCatchVariables] | `false` | Use `any` type for catch clause variables (for compatibility) |

### Transpilation Settings

| Setting                                        | Value  | Description                                              |
| ---------------------------------------------- | ------ | -------------------------------------------------------- |
| [`removeComments`][removeComments]             | `true` | Remove comments from compiled output for smaller bundles |
| [`newLine`][newLine]                           | `lf`   | Use Unix-style line endings for consistency              |
| [`verbatimModuleSyntax`][verbatimModuleSyntax] | `true` | Preserve module syntax more accurately in output        |
| [`erasableSyntaxOnly`][erasableSyntaxOnly]     | `true` | Allow removal of only erasable syntax for cleaner code  |

## Contributing to @cowtech/typescript-config

- Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
- Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
- Fork the project.
- Start a feature/bugfix branch.
- Commit and push until you are happy with your contribution.
- Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.

## Copyright

Copyright (C) 2025 and above Shogun <shogun@cowtech.it>.

Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/isc.

[target]: https://www.typescriptlang.org/tsconfig#target
[lib]: https://www.typescriptlang.org/tsconfig#lib
[module]: https://www.typescriptlang.org/tsconfig#module
[moduleResolution]: https://www.typescriptlang.org/tsconfig#moduleResolution
[skipLibCheck]: https://www.typescriptlang.org/tsconfig#skipLibCheck
[esModuleInterop]: https://www.typescriptlang.org/tsconfig#esModuleInterop
[allowSyntheticDefaultImports]: https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
[allowImportingTsExtensions]: https://www.typescriptlang.org/tsconfig#allowImportingTsExtensions
[rewriteRelativeImportExtensions]: https://www.typescriptlang.org/tsconfig#rewriteRelativeImportExtensions
[allowJs]: https://www.typescriptlang.org/tsconfig#allowJs
[strict]: https://www.typescriptlang.org/tsconfig#strict
[strictNullChecks]: https://www.typescriptlang.org/tsconfig#strictNullChecks
[noImplicitAny]: https://www.typescriptlang.org/tsconfig#noImplicitAny
[noUnusedLocals]: https://www.typescriptlang.org/tsconfig#noUnusedLocals
[noUnusedParameters]: https://www.typescriptlang.org/tsconfig#noUnusedParameters
[useUnknownInCatchVariables]: https://www.typescriptlang.org/tsconfig#useUnknownInCatchVariables
[removeComments]: https://www.typescriptlang.org/tsconfig#removeComments
[newLine]: https://www.typescriptlang.org/tsconfig#newLine
[verbatimModuleSyntax]: https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax
[erasableSyntaxOnly]: https://www.typescriptlang.org/tsconfig#erasableSyntaxOnly
