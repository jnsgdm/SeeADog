const express = require('express');
const app = express();
const PORT = 3000

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/assets'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.listen(process.env.PORT || PORT,(err)=>{
    if(err){
        return console.log(err);
    }
    console.log('server running...');
})