const express=require('express');
const router=express.Router();
const {addProfile,profile,profileList}=require('./controller')
router.post('/newprofile',addProfile);//name
router.get('/profilelist',profileList);
router.get('/profile',profile);





module.exports=router;