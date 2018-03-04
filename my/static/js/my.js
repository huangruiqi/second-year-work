$(function(){
//进入动画
	$("div:eq(0)").click(function(){
		$(".enter").fadeOut(2000,function(){
			$("#alltop").fadeIn(1000);
			$("#all").fadeIn(1000);
		});
		
	});
//标题
	$("#ta").hover(function(){
		$("#ta").addClass("ta");
	},function(){
		$("#ta").removeClass("ta");
	});
	$("#tb").hover(function(){
		$("#tb").addClass("ta");
	},function(){
		$("#tb").removeClass("ta");
	});
	$("#tc").hover(function(){
		$("#tc").addClass("ta");
	},function(){
		$("#tc").removeClass("ta");
	});
	$("#td").hover(function(){
		$("#td").addClass("ta");
	},function(){
		$("#td").removeClass("ta");
	});
	$("#te").hover(function(){
		$("#te").addClass("ta");
	},function(){
		$("#te").removeClass("ta");
	});
	$("#tf").hover(function(){
		$("#tf").addClass("ta");
	},function(){
		$("#tf").removeClass("ta");
	});
	$("#tg").hover(function(){
		$("#tg").addClass("ta");
	},function(){
		$("#tg").removeClass("ta");
	});
	$("#th").hover(function(){
		$("#th").addClass("ta");
	},function(){
		$("#th").removeClass("ta");
	});
//头部
	window.onscroll=function(){
		var t =document.documentElement.scrollTop||document.body.scrollTop;
		var displaya =document.getElementById("displaya");
		if (t>100) {
			displaya.className="display";
		}
		else{
			displaya.className="displayb";
		}
	}
	$("#displaya").hover(function(){
		$("#displaya").addClass("displayc");
	},function(){
		$("#displaya").removeClass("displayc");
	});
//点击
	$("#cha").click(function(){
		$("#cha").addClass("none");
		$("#chb").removeClass("none");
	});
	$("#chb").click(function(){
		$("#chb").addClass("none");
		$("#chc").removeClass("none");
	});
	var i=1;
	$("#chc").click(function(){
		$("#chc").addClass("none");
		$('img').eq(1).fadeIn(500);	
		showTime();
	});
	
	
	function Show(){
		$('img').eq(i).fadeIn(500);	
  	}

  	// Show();

	function right(){
		$('img').eq(i).fadeOut(0);	
		if(i==5){
			i=0;
		}
		i++;
		Show();
	};
	var timer;
	function showTime(){
    	timer = setInterval(function(){
    		right();
  		},2000);
	}
	
	// Show();
	
});