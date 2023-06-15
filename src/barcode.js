


const express =require('express');
const app = express();
app.get('/', function(req,res) {
    res.send('go to /barcode an enter barcode: ');
})

const mybarcode = "8910422001000011"

app.listen(6969,function(){
    console.log('server is listening at port 6969');
});


app.get('/getPara/:para', function(req,res){
    var strData = req.params.para;
    res.send('Your parameters are ' + strData);
})



var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/postPara', function(req, res){
    var strData = req.body.para;
    var strData2 = req.body.para2;
    var strData3 = req.body.para3;
    res.send('Your parameter:1 is: ' + strData + '\n'
        + 'Your parameter:2 is: ' + strData2 + '\n'
        + 'Your parameter:3 is: ' + strData3);
});


app.get('/new', function(req,res) {

    res.send('Hello 123World');
})
