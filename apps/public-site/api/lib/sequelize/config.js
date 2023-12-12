import { config } from "../../../server-config.js";
console.log(config);
export default  {

  development: {
    url: config.postgresDB,
    dialect: "postgres",
    dialectOptions:{
    }
  }
};
