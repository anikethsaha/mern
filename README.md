<p align="center">

  
<img alt="efba logo" src="https://imgur.com/yr0sfsR.png" width="250px" />

</p>
<h2 align="center">MERN-BoilerPlate</h2>

<p align="center">

 <a href="https://travis-ci.org/anikethsaha/MERN-Boilerplate/branches">
    <img alt="badgeprs" src="https://travis-ci.org/anikethsaha/MERN.svg?branch=master" />
  </a>
   <a href="#contributors">
    <img alt="contributors" src="https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square" />
  </a>
<a href="https://app.netlify.com/sites/mern/deploys">
  <img alt="netlify" src="https://api.netlify.com/api/v1/badges/7d38e333-4856-4eed-99b4-a6635594a281/deploy-status" />
 </a>
<a href='https://coveralls.io/github/anikethsaha/MERN-Boilerplate?branch=master'><img src='https://coveralls.io/repos/github/anikethsaha/MERN-Boilerplate/badge.svg?branch=master' alt='Coverage Status' /></a>

  <a href="https://dependabot.com/">
    <img alt="badgeprs" src="https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="badgeprs" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <img alt="badgeprs" src="https://img.shields.io/badge/PRs-Welcome-green.svg" />
</p>

<p align="center">
  This is boilerplate for MERN stack with integrations like Redux and SSR
</p>
<br><br>

 ## Checkout the  [MERNG-Boilerplate](https://github.com/anikethsaha/MERNG-BoilerPlate) for MERN with GraphQL Stack Boilerplate


[![Edit MERN](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mern-gq5eb?fontsize=14)

## Table of Contents

-   [Getting Started](#getting-started)
-   [Configurations](#configs-for-addons-v1)
    -   [`mern.json`](#mernjson)
-   [Starting development setup](#starting-development-setup)
    -   [Using CWA](#you-can-also-add-this-using-this-package)
-   [Start Editing](#start-editing)
-   [technology](#technology)
-   [Features](#features)
-   [addons using `mern.json`](#addons-using-mernjson)
-   [license](#license)
-   [contributors](#contributors)



## Getting Started
- **Clone the project**

- **Install the Dependencies**
```bash
$ npm i
```

- **Run the server**
```bash
$ npm run server:dev
```

## configs for addons v1
You can add addons for this project by simply editing the `mern.json` and then running `npm run develop`

### `mern.json`
- default options

```json
{
  "styles": "none", 
  "stateManager": "none"
}
```

- For adding `styles` 
  - `"styles": "styled-components"` for styled-components
  - `"styles": "css-modules"` for css-modules using webpack

- For adding state manager
  - `"stateManager": "redux"` for redux store 
 
**Run `npm run develop` or `yarn develop` after changing `mern.json`** 
You can check the `scripts` folder for the implementation of these. Can even add your own addons. 
Try to replicat how the other addons are build
Soon gonna add plugin system in this project, then it will be much simpler to create own plugins which can do different stuffs like SSR with store injections, managing `webpack.config.js`.
That will be the main feature for **v2**

More addons are coming soon.

> these addons should be added before you start editing or working on this project

## Starting development setup

- **Run the webpack server**
```bash
$ npm run watch
``` 
and, start making changes in `src/client` , `src/server` and `src/common` folders.

- **For running the production server**
```bash
$ npm run server:prod
```

### You can Also add this using [This Package](https://www.npmjs.com/package/@buildtip/create-web-app)
```bash
$ npm i -g @buildtip/create-web-app
$ cwa

```
And then on question `no. 4` that is `Please Select Project Stack [ Required ] :` Type: **`1`**




## Start Editing 

Look for the `config/index.js` for making changes in the configs of the project

- *Edit* the src/client/index.js to make changes for client

- *Edit* the src/server/index.js to make changes in the server



## technology
- NodeJS - Server
- ExpressJS - Nodejs framework
- MongoDB - Database
- ReactJS - Frontend
- Redux - State Management
- Docker - Containerization and image
- Eslint - Linter
- Webpack - Bundler
- Babel - Loader and Compiler/Transpiler
- Jest - Testing Framework


## Features
- [x] Server Side Rendering
- [x] Image for Container
- [x] Routing
- [x] Model Controller Project Structure
- [X] Build Pipelines
- [X] Tests
- [X] Examples (live in codesandbox)

## addons using `mern.json`
- [x] State Management
  - Redux
- [X] Styling 
  - styled-components (css-in-js) 


## todo - addons
- `state-manager`
  - [ ] Mobx
  - [ ] Context API
- `styles`
  - [ ] emotion
  - [ ] postcss support (css modules, cssnano)
  - [ ] linaria
  - [ ] aphrodite
  
## [LICENSE](https://github.com/anikethsaha/MERN-Boilerplate/blob/master/LICENSE)


## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://anikethsaha.github.io"><img src="https://avatars1.githubusercontent.com/u/26347874?v=4" width="100px;" alt="Anix"/><br /><sub><b>Anix</b></sub></a><br /><a href="#infra-anikethsaha" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/anikethsaha/MERN/commits?author=anikethsaha" title="Tests">⚠️</a> <a href="#ideas-anikethsaha" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-anikethsaha" title="Maintenance">🚧</a> <a href="#design-anikethsaha" title="Design">🎨</a> <a href="https://github.com/anikethsaha/MERN/commits?author=anikethsaha" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/przemwierzbicki"><img src="https://avatars2.githubusercontent.com/u/47298942?v=4" width="100px;" alt="przemwierzbicki"/><br /><sub><b>przemwierzbicki</b></sub></a><br /><a href="#infra-przemwierzbicki" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/anikethsaha/MERN/commits?author=przemwierzbicki" title="Tests">⚠️</a> <a href="https://github.com/anikethsaha/MERN/commits?author=przemwierzbicki" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/anmol5varma"><img src="https://avatars2.githubusercontent.com/u/11690393?v=4" width="100px;" alt="Anmol Varma"/><br /><sub><b>Anmol Varma</b></sub></a><br /><a href="#infra-anmol5varma" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/anikethsaha/MERN/commits?author=anmol5varma" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/lexcorp16"><img src="https://avatars2.githubusercontent.com/u/14166260?v=4" width="100px;" alt="Fasoro-Joseph Alexander"/><br /><sub><b>Fasoro-Joseph Alexander</b></sub></a><br /><a href="#infra-lexcorp16" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/anikethsaha/MERN/commits?author=lexcorp16" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://in.linkedin.com/in/ypahalajani"><img src="https://avatars3.githubusercontent.com/u/14838485?v=4" width="100px;" alt="Yash Pahalajani"/><br /><sub><b>Yash Pahalajani</b></sub></a><br /><a href="#infra-ypahalajani" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/anikethsaha/MERN/commits?author=ypahalajani" title="Code">💻</a> <a href="https://github.com/anikethsaha/MERN/commits?author=ypahalajani" title="Documentation">📖</a> <a href="https://github.com/anikethsaha/MERN/issues?q=author%3Aypahalajani" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/gtdeng"><img src="https://avatars0.githubusercontent.com/u/10056474?v=4" width="100px;" alt="GT Deng"/><br /><sub><b>GT Deng</b></sub></a><br /><a href="#infra-gtdeng" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/wincentrtz"><img src="https://avatars2.githubusercontent.com/u/33319957?v=4" width="100px;" alt="wincentrtz"/><br /><sub><b>wincentrtz</b></sub></a><br /><a href="https://github.com/anikethsaha/MERN/commits?author=wincentrtz" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
