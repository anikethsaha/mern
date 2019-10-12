const { stdout, exit } = require('process');
module.exports = err => {
	console.log(err)
	stdout.write(`\n[MERN]:Please take a look at the readme or create an issue `);
	exit(1);
};
