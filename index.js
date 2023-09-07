
const express = require('express') 
const {readFile,readFileSync} = require('fs');
const app = express();

app.get('/',(request,response)=>{
    readFile('./pages/home.html','utf8',(err,html)=>{

        if(err){
            response.status(500).send("Sorry")
        }
        response.send(html);
        
    })

});

app.get('/user',(request,response)=>{
    readFile('./pages/user.html','utf8',(err,html)=>{

        if(err){
            response.status(500).send("Sorry")
        }
        response.send(html);
    })

});
app.listen(process.env.PORT || 3000,()=>
console.log('App available')
);