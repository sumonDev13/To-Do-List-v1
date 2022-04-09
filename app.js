const express =require("express");
const bodyparser = require("body-parser");

const app = express();

var items=[];

let workItems =[];
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
//  res.send("hello");//data send from server to browser
var today = new Date();

var options ={
  weekday:"long",
  day:"numeric",
  month:"long"

};

var day = today.toLocaleDateString("en-US",options);


/*if(currentDay===6 || currentDay===0){
day = "weekend";


}else{
  day = "weekday";


}*/
res.render("list", {listTitle: day,newListItem:items});//ejs
});

app.post("/",function(req,res){

  item =req.body.newItem;
  if(req.body.list==="work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);

    res.redirect("/");
  }



});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"work list",newListItem:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.post("/work",function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});


app.listen(3000,function(){
  console.log("server started sucessfully");
});
