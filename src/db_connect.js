import Sequelize from 'sequelize';
import path from 'path';
import fs from 'fs';

let db = null;

module.exports = app => {
  if(!db) {
    const config = app.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
    db = {
      sequelize,
      Sequelize,
      models: {} 
    };
    
    const dir = path.join(__dirname, 'models/users.js');
    const model = sequelize.import(dir);
    db.models[model.name] = model;
    

  }

  return db;
};