module.exports.adapters = {
  'default': 'mongo',

  mongo: {
    module: 'sails-mongo',
    host: 'vps',
    port: 27017,
    // user: 'username',
    // password: 'password',
    database: 'dns'
  }
};
