r express = require('express');
var app = express();


// var MongoClient = require('mongodb').MongoClient;
//
// var url = "mongodb://localhost:27017/runoob";

// function _connectDB(callback) {
// 	MongoClient.connect(url, function (err, db) {
// 		if (err) throw err;
// 		callback(err, db);
// 	});
// }

// exports.find = function (collectionName, json, callback) {
// 	var result = [];
// 	if(arguments.length != 3) {
// 		callback("find函数需要接受3个参数", null);
//
// 	}
// 	_connectDB(function (err, db) {
// 		var cursor = db.collectionName.find(json);
// 		cursor.each(function (err, doc) {
// 			if(doc != null) {
// 				result.push(doc);
// 			} else {
// 				callback(null, result);
// 			}
// 		});
// 	});
// }
<ul class="topul">
	<li class="topli">
	Richie
	</li>
	<li class="topli">
<%= number%>
	</li>
	<li class="topli">
<%= position%>
	</li>
	<li class="topli">
<%= emile%>
	</li>
	<li class="topli">
<%= emile2%>
	</li>
	</ul>