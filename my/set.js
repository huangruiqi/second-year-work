var express = require('express');
var app = express();

// var db = require('./db.js');

app.use(express.static("./static"));



var lala = [
	{"loveword":"Don't cry because it is over, smile because it happened."},
	{"loveword":"I love you not because of who you are, but because of who I am."},
{"loveword":"Never frown, even when you are sad,because you never ."},
{"loveword":"To the world you may be one person, but to one person you may."},
{"loveword":"No man or woman is worth your tears, and the one who is."}
];

var haha =[{"experience1":"I like impressionistic art better than abstract art.Compared with abstract art, I like impressionistic art more.It will take many years of strenuous training to be an outstanding ballerina,with agony and the sweat.",
	"experience2":"They float around the stage. They are light and graceful,  treading with light and nimble ease.  It will take many years of strenuous training to be an outstanding ballerina, with agony and the sweat.",
	"experience3":"please don’ t keep silence all the time and don’ t wait just for waiting. may the boat with my love sail into your heart.It will take many years of strenuous training to be an outstanding ballerina, with agony and the sweat."}];

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// var resultA;
app.get("/news", function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("runoob");
		dbo.collection("site").find({}).toArray(function (err, result) { // 返回集合中所有数据
			if (err) throw err;
			res.json(result);
			db.close();
		});
	});
	// res.json(shujuku);
});

app.get("/loveword", function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("runoob");
		dbo.collection("lala").find({}).toArray(function (err, result) { // 返回集合中所有数据
			if (err) throw err;
			res.json(lala);
			db.close();
		});
	});
	// res.json(lala);
});

app.get("/experience", function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("runoob");
		dbo.collection("haha").find({}).toArray(function (err, result) { // 返回集合中所有数据
			if (err) throw err;
			res.json(haha);
			db.close();
		});
	});
	// res.json(haha);
});
app.listen(8000);