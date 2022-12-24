const data=require('./config/config.json');
const express=require('express');
const profileRouter=require('./profile/router');
const app=express();
app.use(express.json());
app.use(profileRouter);

app.listen(4545||data['port'], () => { console.log(`running on port http://${data['host']}:${data['port']}`) });