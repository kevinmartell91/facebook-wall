const NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${NODE_ENV}`
}); 

module.exports = {
  environment: process.env.NODE_ENV,
  mongo_path: process.env.MONGO_PATH,
  mongo_db: process.env.MONGO_DB,
  mongo_user: process.env.MONOGO_USER,
  mongo_pass: process.env.MONGO_PASSWORD,
  port: process.env.PORT || 8080,
}