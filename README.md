# catalog-apps
simple product catalog app with:
- ⚡️ Next.js 13 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- Zustand
- Server Side Rendering

#### Minimum Requirements
* node `v18.12.0`
* npm `8.19.2`

### Getting Started

After confirming that your [requirements](#requirements),
you can start the site by running these commands:

```bash
$ git clone {this.repo} catalog-apps
$ npm i                             # with minimum requirement node
$ npm run dev                       # Running development mode
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`dev` |Serves your app at `localhost:3000`|
|`build`|Compiles the application to .next|
|`start` |Serves your builded app at `localhost:3000`|
|`test`|Runs all tests in sequence|
|`lint`|Run javascript linter.|
