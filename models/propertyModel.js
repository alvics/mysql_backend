import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Property = db.define('properties',{
    customer:{
        type: DataTypes.STRING
    },
      address:{
        type: DataTypes.STRING
    },
      customer_phoneNumber:{
        type: DataTypes.STRING
    },
     rent_price:{
        type: DataTypes.INTEGER
    },
    weeks_paid:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default Property;