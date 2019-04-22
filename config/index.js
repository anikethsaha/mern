const bcrypt = require('bcryptjs');
const mongodb_name = "__"
module.exports = {
    port : 5000,
    sessionSecretKey : bcrypt.hashSync("SECRET_KEY", 2),
    MONGODB_DATABASE_NAME : mongodb_name,
    MONGO_URL  : `mongodb://localhost/${mongodb_name}`,
}
