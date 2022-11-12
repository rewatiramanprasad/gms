const{newMember}=require("./sqlController")

const addProfile=async (req,res)=>{
    try {
    const email=req.query.email;
    const name=req.query.name;
    const dob=req.query.dob;
    const fatherName=req.query.fathername;
    const address=req.query.address;
    const aadhar=req.query.aadhar;
    const mobile=req.query.mobile;
    const result=await newMember(email,name,dob,fatherName,address,aadhar,mobile);
    } catch (error) {
        console.log(error);
    }
    


}

module.exports={addProfile,profileList,Profile }