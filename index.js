var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("Mongodb connection succeeded ommala podu thaikda");
})

var app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	var data = {
		"name": name,
		"email":email,
		"password":pass,
		"phone":phone
	}

app.use('/public',express.static(__dirname +"/public"));
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect(`${req.baseUrl}/signup_succes.html`);;
})

app.use('/public',express.static(__dirname +"/public"));
app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect(`${req.baseUrl}/public/index.html`);
}).listen(3000)


console.log("Vanakam da mapla server listening at port 3000");

