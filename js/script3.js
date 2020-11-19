window.onload = function(){
	
	run.onclick = function(){
		var xhr =  new XMLHttpRequest();
	
		//xhr.open('GET','http://www.nbrb.by/API/ExRates/Currencies',true);
		
		xhr.open('GET','http://www.nbrb.by/API/ExRates/Rates',true);
		
		xhr.send();
		
		xhr.onload = function(){
			console.log(this.status);
			console.log(this.statusText);
			let res =JSON.parse(this.responseText);
			console.log(res)
		}
	}
	
	
	
}