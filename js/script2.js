window.onload = function(){
	
	run.onclick = function(){
		var xhr =  new XMLHttpRequest();
	
		xhr.open('GET','json/info.json',true);
		
		xhr.send();
		
		xhr.onload = function(){
			console.log(this.status);
			console.log(this.statusText);
			let res =JSON.parse(this.responseText);
			console.log(res.name)
		}
	}
	
	
	
}