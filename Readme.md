# React app from scratch using Webpack 4

[![N|Solid](https://ffiverr-res.cloudinary.com/images/t_medium9,q_auto,f_auto/gigs/97487541/original/af2981514d2b1528eec0bf94c49673a130b69504/create-an-awesome-website-in-reactjs.png)]


## Setup

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


First Tab:
```
mkdir react_search
cd react_search
npm init -y
npm i webpack webpack-cli -D
```

Update scripts in package.json
```javascript
//package.json
  "scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  }
```

```
npm i react react-dom -S
npm i babel-core babel-loader babel-preset-env babel-preset-react -D
```
**babel-core**: Transforms your ES6 code into ES5
**babel-loader**: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel
**babel-preset-env**: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
**babel-preset-react**: Babel preset for all React plugins, for example turning JSX into functions

```
npm i html-webpack-plugin -D
npm i webpack-dev-server -D
```

Update scripts in package.json
```javascript
//package.json
  "scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
  },
```
### SASS
```
npm i --save-dev style-loader css-loader sass-loader node-sass extract-text-webpack-plugin@^4.0.0-beta.0
```

[sass-loader](https://github.com/webpack-contrib/sass-loader): This plugin will help us compile SCSS to CSS.

[node-sass](https://github.com/sass/node-sass): The sass-loader required node-sass as a peer dependency.

[css-loader](https://github.com/webpack-contrib/css-loader): The CSS loader interprets @import and url() like import/require() and will resolve them.

[style-loader](https://github.com/webpack-contrib/style-loader): Adds CSS to the DOM by injecting style tag.

[extract-text-webpack-plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/): It moves all the required .css modules into a separate CSS file.