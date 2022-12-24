const{newMember}=require("./sqlController")
const {response}=require("../utility/responsive")

const addProfile=async (req,res)=>{
    try {
      //  console.log(res);
    const email=req.body.email;
    console.log(email);
    const name=req.body.name;
    const dob=req.body.dob;
    const fatherName=req.body.fathername;
    const address=req.body.address;
    const aadhar=req.body.aadhar;
    const mobile=req.body.mobile;
    const result=await newMember(email,name,dob,fatherName,address,aadhar,mobile);
    console.log(result);
    if(result==1){
        res
        .status(200)
        .send(response([],true,"new member added successfully"))
        .end() }
    } catch (error) {
        console.log(error);
    }
    
}
const profileList=()=>{


}

const profile=()=>{

}

module.exports={addProfile,profileList,profile }