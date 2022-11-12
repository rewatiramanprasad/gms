const { queryWithPara } = require("../utility/db")

const newMember= async(...data)=>{
const sql=`insert into profile(email,name,dob,fatherName,address,aadhar,mobile) values($1,$2,$3,$4,$5,$6,$7)`
const result=await queryWithPara(sql,data);
console.log(result);
}
module.exports={newMember}