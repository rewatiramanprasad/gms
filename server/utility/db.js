//const data = require("../config/config.json");
// const mysql = require(`mysql-await`);
// const { ValidationError } = require("./errorHandler");
// const string = {
//   host: "sql311.epizy.com",
//   user: "epiz_32955902",
//   password: "ldbl1xkHgLvVCi4",
//   database: "epiz_32955902_login",
//   port:3306,
//   throwErrors: false,
// };
const { Client } = require("pg");
const connectionString =
  "postgres://postgres:QnMoiQdVF0IuvkUb@db.rdbnvztwdvbhvwdqxpwj.supabase.co:6543/postgres" ||
  process.env.dbstring;

const query = async (str) => {
  try {
    const client = new Client({ connectionString });

    client.connect();
    let result = await client.query(`${str}`);
    await client.end();
    return result.rows;
  } catch (error) {
    console.log(error.stack);
  }
};

const queryWithPara = async (str, arr) => {
  try {
    const client = new Client({ connectionString });
    await client.connect();
    let result = await client.query(`${str}`, arr);
    await client.end();
    return result.rows;
  } catch (error) {
    // next(error)
    console.log(error);
  }
};
// (async()=>{
// let res=await queryWithPara(`insert into login(username,password)values(?,?)`,["raman","rewati"]);
// console.log(res)})();

module.exports = { query, queryWithPara };
