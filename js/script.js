'use strict';
window.onload = function(){
	let k = 0;
	let dateForm = [
		['input','text','userName','Введите имя'],
		['input','text','userSurname','Введите фамилию'],
		['input','text','userPhone','Введите телефон'],
		['input','text','userAdress','Введите адресс'],
		['input','text','userZP','Введите ЗП'],
		['textarea','text','userMore','Введите Подробно'],
		['input','button','addInfo','Введите Подробно']
	]
	
	let tableHead = [
		'id','Имя','Фамилия','Телефон','Адрес','ЗП','Дата регистрации','Дата обновления'
	]
	
	function loader(){
		if(checkCookie()){
			createTable(false);
			//console.log(document.cookie.slice(6))
			table.innerHTML+=document.cookie.slice(6);
			createForm();
		}
		else {
			createTable();
			createForm();
		}
	}
	
	
	function checkCookie(){
		if(document.cookie.indexOf('table')!=-1){
			return true;
		}
		
		else {
			return false;
		}
	}
	
	function createTable(flag=true){
		let table = document.createElement('table');
		table.className = "table";
		table.id="table";
		document.body.appendChild(table);
		
		if(!flag){
			return false;
		}
		
		let tr = document.createElement('tr');
		table.appendChild(tr);
		
		
		for(let i = 0; i<=tableHead.length; i++){
			createDOM('th','',tr,tableHead[i]);
		}
	}
	
	function createDOM(element,id,where,text="",type=false){
		let elem = document.createElement(element);
		elem.id = id;
		
		if(type && text) {
			elem.setAttribute('type',type);
			elem.setAttribute('placeholder',text);
		}else {
			elem.innerHTML = text;	
		}
		
		where.appendChild(elem);
		
	}
	
	function createForm(){
		createDOM('div','formAdd',document.body);
		for(let i = 0; i<dateForm.length; i++){
			createDOM(dateForm[i][0],dateForm[i][2],formAdd,dateForm[i][3],dateForm[i][1]);
		}
	}
	
	loader();
	
	addInfo.onclick = function(){
		let elems =  formAdd.children;
		let tr = document.createElement('tr');
		table.appendChild(tr);
		createDOM('td','',tr,++k);
		for(let i = 0; i<elems.length-1;i++){
			
			
			if(elems[i].id == 'userMore'){
				let trHide = document.createElement('tr');
				trHide.className="hide"
				table.appendChild(trHide);
				
				let tdHide = document.createElement('td');
				tdHide.setAttribute('colspan',9);
				tdHide.innerHTML= elems[i].value;
				trHide.appendChild(tdHide);
			}else {
				createDOM('td','',tr,elems[i].value)
			}
			
		}
		let date = new Date(); 
		createDOM('td','',tr,date.toLocaleString());
		createDOM('td','',tr,'-');
		createDOM('td','',tr,'<span href="#" id="delItem">remove</span>');
		
		
	}
	
	
	saveTable.onclick = function(){
		let info = table.innerHTML;
		console.log(info);
		document.cookie=`table=${info};`
	}
}






