

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.find = function(callback) {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("runoob");
		dbo.collection("site").find({}).toArray(function (err, result) { // 返回集合中所有数据
			if (err) throw err;
			callback(result);
			db.close();
		});
	});
}