const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: process.env.MONGO_CONNECTION,
        authCookieName: 'x-auth-token',
        secret: 'secret'
    },
    production: {}
};

module.exports = config[env];