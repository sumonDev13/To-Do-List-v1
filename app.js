const express =require("express");
const bodyparser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/",function(req,res){
//  res.send("hello");//data send from server to browser
var today = new Date();
var currentDay = today.getDay();
var day ="";

switch (currentDay) {
  case 0:
  day = "sunday";

    break;
    case 1:
    day = "monday";

      break;
      case 2:
      day = "tuesday";

        break;
        case 3:
        day = "wednesday";

          break;
          case 4:
          day = "thursday";

            break;
            case 5:
            day = "friday";

              break;
              case 6:
              day = "saturday";

                break;
  default:
  console.log("error: current day is equal " + currentDay);

}


/*if(currentDay===6 || currentDay===0){
day = "weekend";


}else{
  day = "weekday";


}*/
res.render("list", {kindOfDay: day});//ejs
});


app.listen(3000,function(){
  console.log("server started sucessfully");
});
