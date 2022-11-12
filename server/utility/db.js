const data = require("../config/config.json");

const { Client } = require("pg");
const connectionString =data["connectionString"]||process.env.dbstring;

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
