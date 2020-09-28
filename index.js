//const express = require('express');
//const app = express();
 
//app.get('/',(req,res) => {//เเบบใหม่ name => {  }
    //res.send("<h1>My Portfolio</h1>");//res.send ส่งข้อมูลไปหน้าเว็ป
//});

//app.listen(//Port3000 
  //  3000,
    //()=>{
     //   console.log("listening to port 3000");
    //}
//);
const PORT = process.env.PORT || 3000;
const express = require('express');
const router =require('./routes/index');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');

app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');
app.use('/',router);
app.use(express.static(path.join(__dirname,'public')));



app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  

