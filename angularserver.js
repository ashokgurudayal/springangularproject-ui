const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(4200, () => console.log('server started 4200'));

app.use(express.static(path.join(__dirname,'./dist/springangularproject-ui/')));
//you can check inside dist folder you must have a folder which is nothing but the projectname;
//give the correct path if you create the js file in any other location

app.get("*",(req,res)=>{
return res.sendFile(path.join(__dirname,'./dist/springangularproject-ui/index.html'));
});