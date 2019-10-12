const { resolve } = require('path');
const errorReporter = require('./utils/errorReporter');
const { writeFile, mkdir, existsSync,copyFile } = require('fs');
const {ncp} = require('ncp');
const rimraf = require("rimraf");
const writeJsonFile = require('write-json-file');
const reduxHandler = () => new Promise((res,rej) => {
    const pkgJson = require('../package.json');
	pkgJson.dependencies = {
		...pkgJson.dependencies,
        "react-redux": "^7.1.0",
        "redux": "^4.0.1",
  	};
   writeJsonFile(resolve(__dirname,'../package.json'), pkgJson);
   const source = resolve(__dirname,'./templates/stateManager/redux')
   const destination = resolve(__dirname,'../src/client')

   console.log('[MERN]: Deleting store folder (if any)')

	rimraf.sync(`${destination}/store`)  
    console.log('[MERN]: Copying redux template')
    ncp(`${source}/store`, `${destination}/store`,  (err) =>{
        if (err) {
            errorReporter(err);
            rej({err:1})
        }
        console.log('[MERN]: Copying Success')
        console.log('[MERN]: Replacing the root.jsx component')
        copyFile(resolve(`${source}/root.jsx`), `${destination}/root.jsx`, (err) => {
            if (err) {
                errorReporter(err);
                rej({err:1})
            }
            console.log('[MERN]: root.jsx Copied succesfully');
            res(0)
        });
    });
})

module.exports = stateManager =>
	new Promise((res, rej) => {
		if (stateManager === 'redux'){
            reduxHandler()
            .then(_ => res(0))
            .catch(_ => rej(_))
        }else if(stateManager === 'none'){
            res(0)
        }else rej({"error" : "Wrong config file options for stateManager"})
	});
