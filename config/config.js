var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'watermon'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:admin@ds037145.mongolab.com:37145/waterlevel'
  },

  test: {
    root: rootPath,
    app: {
      name: 'watermon'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:admin@ds037145.mongolab.com:37145/waterlevel'
  },

  production: {
    root: rootPath,
    app: {
      name: 'watermon'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:admin@ds037145.mongolab.com:37145/waterlevel'
  }
};

module.exports = config[env];
