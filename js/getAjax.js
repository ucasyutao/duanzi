function getAjax(httpUrl,callbackFn){
	var xhr = new XMLHttpRequest;
	xhr.open('GET',httpUrl);
	xhr.send();//post的话要在这里填内容
	xhr.onreadystatechange = function(){
		if(xhr.status==200&xhr.readyState==4){
			/* var res = JSON.parse(xhr.response)
			console.log(res) */
			callbackFn(xhr)
		}
	}
}