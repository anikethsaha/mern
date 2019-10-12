const { resolve } = require("path");
const errorReporter = require("./utils/errorReporter");
const { writeFile, mkdir, existsSync, copyFile, unlinkSync } = require("fs");
const { ncp } = require("ncp");
const rimraf = require("rimraf");
const writeJsonFile = require("write-json-file");

const handleNoneStyles = () => {
  let styleSheetOutputPath = resolve(__dirname, "../public/css");
  if (!existsSync(styleSheetOutputPath)) {
    return new Promise((res, rej) => {
      mkdir(styleSheetOutputPath, err => {
        if (err) {
          errorReporter(err);
          rej(err);
        }
        writeFile(
          `${styleSheetOutputPath}/style.css`,
          `/* add your styles here and then add them to your components using classname or id*/`,
          err => {
            if (err) {
              errorReporter(err);
              rej(err);
            } else {
              console.log(
                "[MERN]: added style sheet in your public/css folder ✓"
              );
              res(0);
            }
          }
        );
      });
    });
  } else {
    return new Promise((res, rej) => {
      writeFile(
        `${styleSheetOutputPath}/style.css`,
        `/* add your styles here and then add them to your components using classname or id*/`,
        err => {
          if (err) {
            errorReporter(err);
            rej(err);
          } else {
            console.log(
              "[MERN]: added style sheet in your public/css folder ✓"
            );
            res(0);
          }
        }
      );
    });
  }
};
const handleStyledComponentStyles = () => {
  const pkgJson = require("../package.json");
  pkgJson.dependencies = {
    ...pkgJson.dependencies,
    "styled-components": "^4.4.0"
  };
  writeJsonFile(resolve(__dirname, "../package.json"), pkgJson);
  const source = resolve(
    __dirname,
    "./templates/styles/styled-components/hello"
  );
  const destination = resolve(__dirname, "../src/client/components/hello");
  console.log("[MERN]: Deleting existing default components (if any)");

  return new Promise((res, rej) => {
    rimraf.sync(destination);
    console.log("[MERN]: Copying styled-component template");
    ncp(source, destination, err => {
      if (err) {
        errorReporter(err);
        rej({ err: 1 });
      }
      console.log("[MERN]: Copying Success ✓");
      res(0);
    });
  });
};

const handleCSSModulesStyles = () => {
  /**
		step 1. change the devDependencies and add css and style loader  --- done 
		step 2. change the jest scripts  --- done 
		step 3  delete the hello component from src/client/component/ and copy the hello copy folder --done
		step 4. replace the webpack.config.js with the template webpack.config.js -- done
		step 5  copy the __mock__ folder to src/client
	*/

  const pkgJson = require("../package.json");
  pkgJson.devDependencies = {
    ...pkgJson.devDependencies,
    "css-loader": "^3.2.0",
    "style-loader": "^1.0.0"
  };
  pkgJson.jest = {
    setupFilesAfterEnv: ["<rootDir>/src/client/setupTests.js"],
    moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/src/client/__mocks__/styleMock.js"
    }
  };
  writeJsonFile(resolve(__dirname, "../package.json"), pkgJson);
  const source = resolve(__dirname, "./templates/styles/css-modules");
  const destination = resolve(__dirname, "../src/client/components/hello");
  console.log("[MERN]: Deleting existing default components (if any)");

  return new Promise((res, rej) => {
    rimraf.sync(destination);
    console.log("[MERN]: Copying css-modules template");
    ncp(`${source}/hello`, destination, err => {
      if (err) {
        errorReporter(err);
        rej({ err: 1 });
      }
      console.log(`[MERN]: Copied hello component ✓`);
      console.log("[MERN]: Copying webpack.config.js");
      copyFile(
        resolve(`${source}/webpack.config.js`),
        resolve(__dirname, "../webpack.config.js"),
        err1 => {
          if (err1) {
            errorReporter(err1);
            rej({ err: 1 });
          }
          console.log(`[MERN]: Copied webpack.config.js ✓`);
          console.log("[MERN]: Copying __mocks__");
          ncp(
            `${source}/__mocks__`,
            resolve(__dirname, "../src/client/__mocks__"),
            err3 => {
              if (err3) {
                errorReporter(err3);
                rej({ err: 1 });
              }
              console.log("[MERN]: Copied succesfully ✓");
              res(0);
            }
          );
        }
      );
    });
  });
};
module.exports = style =>
  new Promise((_resolve, _reject) => {
    if (style === "none") {
      handleNoneStyles()
        .then(res => _resolve(0))
        .catch(err => _reject(err));
    } else if (style === "styled-components") {
      handleStyledComponentStyles()
        .then(res => _resolve(0))
        .catch(err => _reject(err));
    } else if (style === "css-modules") {
      handleCSSModulesStyles()
        .then(res => _resolve(0))
        .catch(err => _reject(err));
    } else _reject({ error: "Wrong config file for styles" });
  });
