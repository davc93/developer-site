import { config } from "../../../server-config.js";
console.log(config);
export default  {
  local: {
    url: config.dbUrl,
    dialect: "postgres",
    dialectOptions:{
        ssl:{
          rejectUnauthorized:false
        }
      }
  },
  development: {
    url: config.dbUrl,
    dialect: "postgres",
    dialectOptions:{
      ssl:{
        rejectUnauthorized:false
      }
    }
  },
  production: {
    url: config.dbUrl,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
