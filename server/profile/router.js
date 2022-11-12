const express = require("express");
const router = express.Router();
const { addProfile, profileList, profile } = require("./controller");
router.post("/newprofile", addProfile); //name
router.get("/profilelist", profileList);
router.get("/profile", profile);

module.exports = router;
