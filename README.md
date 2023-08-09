# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

`pnpm run -w zilliz.com.en:dev` or 'pnpm -F zilliz.com.en run dev'
or you can cd to specific directory and run `pnpm dev`

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## How to use

git clone，cd to zilliz-website and run `pnpm install`

## How to install dependencies

- Global dependencies:
  `pnpm add some-package -w` or `pnpm add some-package -wD`

- 单独安装:
  `pnpm add -F some-package -D` or cd to specific directory and run 'pnpm add some-package'

## Dev and Build

`pnpm run zilliz.com.en:dev` or `pnpm -F zilliz.com.en run dev`
or you can cd to specific directory and run `pnpm dev`

## How to turn locale files into dependencies

- cd to current directory and run `pnpm init`,

- modify package.json file:

```
  "main": "./index.tsx",
  "types": "./index.tsx",
```

than export content from index.tsx;

- install local dependency
  cd to specific directory and modify package.json file:
  `"locale-dependency": "workspace:*"`, or you can run `pnpm add ./path-to-dependency`

## Public config files

please refer `packages/tsconfig`

## About related paths

- '@p': './packages'
- '@s': './styles'
  -'@': zilliz.com.\*n/src
