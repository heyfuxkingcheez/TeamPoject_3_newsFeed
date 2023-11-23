import dotenv from "dotenv";
dotenv.config();

const development = {
    username: process.env.CONFIG_NAME,
    password: process.env.CONFIG_PASSWORD,
    database: process.env.CONFIG_DATABASE,
    host: process.env.CONFIG_HOST,
    port: process.env.CONFIG_PORT,
    dialect: process.env.CONFIG_DIALECT,
};

const test = {
  username: process.env.CONFIG_NAME,
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  port: process.env.CONFIG_PORT,
  dialect: process.env.CONFIG_DIALECT,
};

const production = {
  username: process.env.CONFIG_NAME,
  password: null,
  database: "database_production",
  host: "127.0.0.1",
  port: process.env.CONFIG_PORT,
  dialect: process.env.CONFIG_DIALECT,
};

export { development };
