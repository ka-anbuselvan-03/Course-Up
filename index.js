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
	
	var FirstName = req.body.FirstName;
	var LastName = req.body.LastName;
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	
	

	var data = {
		"FirstName": FirstName,
		"LastName": LastName,
		"username": username,
		"email":email,
		"password":password,
		
		
	}

app.use('/public',express.static(__dirname +"/public"));
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully mongodb la poi check pannu thala :");
			
	});
		
	return res.redirect(`${req.baseUrl}/Login.html`);;
})

app.use('/public',express.static(__dirname +"/public"));
app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect(`${req.baseUrl}/public/Register.html`);
}).listen(3000)


console.log("Vanakam da mapla server listening at port 3000");

