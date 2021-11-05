import { Sequelize } from "sequelize";

const { PGPORT, PGUSER, PGPASSWORD, PGHOST, PGDATABASE } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  port: PGPORT,
  host: PGHOST,
  dialect: "postgres",
});

export const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("authorized!");
  } catch (error) {
    console.log(error);
  }
};

export default sequelize;
