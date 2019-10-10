const express=require("experss");
const app = express();
app.use(express.static('public'));
app.get("/",function(req,res){
    res.send("hello world !");
});
app.listen(8080);
app.console.log("port is listin at 8080...");


