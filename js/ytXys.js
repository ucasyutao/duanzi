(function(){
	function ytXys(){
		var html = document.querySelector('html')
		var userAgent = navigator.userAgent
		//userAgent.indexOf("iPhone"),通过此方法可以获取iphone在字符中的索引值
		html.className = "";
		if(userAgent.indexOf("iPhone")!=-1){
			//console.log(iphone)
			html.classList.add("iphone")
		}else if(userAgent.indexOf("Android")!=-1){
			//console.log(iphone)
			html.classList.add("android")
		}else if(userAgent.indexOf("iPad")!=-1){
			//console.log(iphone)
			html.classList.add("ipad")
		}else{
			html.classList.add("pc")
		}
		var screenWidth = window.innerWidth;
				var danwei = screenWidth/3.75;//屏幕的宽度/设计稿占满全屏的宽度为多少rem
				var html = document.querySelector("html")
				html.style.fontSize = danwei + 'px';
				
	}
	ytXys()
			
	window.onresize = function(){
		ytXys()
	}
})()