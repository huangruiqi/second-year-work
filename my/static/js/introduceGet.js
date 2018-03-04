//得到模板内容
var mobanString = $("#moban").html();
//用库里面的模板函数
var compiled = _.template(mobanString);
//用jq里面的ajax  get方法获取数据
$.get("/news",function (data, status) {
	//用循环将数据库里面的数据给导入进去
	for(var i = 0;i<data.length;i++) {
		//将利用类似render的方法获取数据并将这个的结果得到
		var compiledString = compiled(data[i]);
		//将这个内容加到content里面去
		//加$会让它变成一个对象
		$(".topcontent table").append($(compiledString));

	}
})