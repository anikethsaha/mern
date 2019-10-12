const config = require('../mern.json');
const runStyleHandler = require('./styleHandler');
const runStateManangerHandler = require('./stateManagerHandler');
const errReporter = require('./utils/errorReporter')
const runScripts =  ({ styles, stateManager }) => {
	console.log('[MERN]: config options passed');
	console.log('[MERN]: styling using :', styles);
	console.log('[MERN]: state management using :', stateManager);

	runStyleHandler(styles)
	.then(res => {
		console.log('[MERN]: Styling Done 🎉')
		runStateManangerHandler(stateManager)
		.then(res => {
			console.log('[MERN]: State Manager done 🎉');
			console.log(`[MERN]: Please do npm/yarn install to install the new packages added to the project`)
		})
		.catch(err => errReporter(err))
	})
	.catch(err => errReporter(err))
};

runScripts(config);
