const express = require("express");
const router = express.Router();
const { addProfile, profileList, profile } = require("./controller");
router.post("/newprofile", addProfile); //name
router.get("/profilelist", profileList);
router.get("/profile", profile);
router.get("/",(req,res)=>{
    console.log("welcome to home page.")
    res.status(200).send(JSON.stringify("welcome to home page")).end();
    });




module.exports = router;
