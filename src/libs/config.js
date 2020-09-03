import path from 'path';

module.exports = {
    database: 'test-api-db',
    username: '',
    password: '',
    params:{
        dialect: 'sqlite',
        storage: path.resolve(__dirname, 'test-api-db'),
        define: {
            underscore: true
        },
        operatorAliases: false
    }
};