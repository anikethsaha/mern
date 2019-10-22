const bcrypt = require('bcryptjs');
const mongodb_name = process.env.MONGODB_DATABASE_NAME || 'MERN_DB';
module.exports = {
	port: process.env.PORT || 5000,
	sessionSecretKey: process.env.SESSION_SECRET_KEY || bcrypt.hashSync('SECRET_KEY', 2),
	MONGODB_DATABASE_NAME: mongodb_name,
	MONGO_URL: process.env.MONGO_URL || `mongodb://localhost/${mongodb_name}`
};
