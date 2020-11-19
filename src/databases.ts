import * as data  from "./config/config.json";
import * as Sequelize  from "sequelize";



const username  = data.development.username;
const databas  = data.development.database;
const password  = data.development.password;

export const database = new Sequelize.Sequelize(databas, username, password,{

    dialect: 'mysql',
    port: 3306


});
