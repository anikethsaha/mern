const { resolve } = require('path');
const errorReporter = require('./utils/errorReporter');
const { writeFile, mkdir, existsSync } = require('fs');
const {ncp} = require('ncp');
const rimraf = require("rimraf");
const writeJsonFile = require('write-json-file');


const handleNoneStyles = () => {
	let styleSheetOutputPath = resolve(__dirname, '../public/css');
	if (!existsSync(styleSheetOutputPath)) {
		return new Promise((res,rej) => {
			mkdir(styleSheetOutputPath, err => {
				if (err) {
					errorReporter(err)
					rej(err)
				};
				writeFile(
					`${styleSheetOutputPath}/style.css`,
					`/* add your styles here and then add them to your components using classname or id*/`,
					err => {
						if (err) {
							errorReporter(err)
							rej(err)
						}else {
							console.log('[MERN]: added style sheet in your public/css folder')
							res(0)
						}
					}
				)
		})
  })
}else{
	return new Promise((res,rej) => {
	writeFile(
		`${styleSheetOutputPath}/style.css`,
		`/* add your styles here and then add them to your components using classname or id*/`,
		err => {
			if (err) {
				errorReporter(err)
				rej(err)
			}else {
				console.log('[MERN]: added style sheet in your public/css folder')
				res(0)
			}
		}
	)
	})
  }
}
const handleStyledComponentStyles = () => {
	const pkgJson = require('../package.json');
	pkgJson.dependencies = {
		...pkgJson.dependencies,
		'styled-components': '^4.4.0'
  	};
   writeJsonFile(resolve(__dirname,'../package.json'), pkgJson);
  const source = resolve(__dirname,'./templates/styles/styled-components/hello')
  const destination = resolve(__dirname,'../src/client/components/hello')
  console.log('[MERN]: Deleting existing default components (if any)')

  return new Promise((res,rej) => {
	rimraf.sync(destination)  
		console.log('[MERN]: Copying styled-component template')
		ncp(source, destination,  (err) =>{
		  if (err) {
			errorReporter(err);
			rej({err:1})
		  }
		  console.log('[MERN]: Copying Success')
		  res(0)
		 });
  })
  
  
}



module.exports = (style) =>  new Promise((_resolve, _reject) => {
		if (style === 'none') {
			handleNoneStyles()
			.then(res => _resolve(0))
			.catch(err => _reject(err))
		}else if  (style === 'styled-components') {
			handleStyledComponentStyles()
			.then(res => _resolve(0))
			.catch(err => _reject(err))
		}else _reject({"error" : "Wrong config file for styles"})
	})

