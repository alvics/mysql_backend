// Connect to the database
import { Sequelize } from "sequelize";

// database name 'propertymanager' username and password
const db = new Sequelize('propertymanager', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;