require('dotenv').config();
const express=require('express');
const ejs=require('ejs');
const bodyParser=require('body-parser');
const axios=require('axios');
const app=express();

app.set('view engine',ejs);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/", function(req, res){
    let url=`https://api.spoonacular.com/recipes/random/?apiKey=${process.env.KEY}`; 
    axios.get(url)
    .then(response=>{
        console.log(response.data)
        res.render('index.ejs',{recipes:response.data.recipes});
        
    })
    .catch(error=>{
        console.log(error);
    });

 });


/*app.listen(3000, ()=>{
    console.log('Server is running on Port 3000');
    });*/

    app.listen(process.env.PORT || 3000, function(){
        console.log("Server has started.");
    });
    