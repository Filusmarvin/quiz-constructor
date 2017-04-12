let url = "http://jservice.io/api/random?count=3";

function getData(){
	return fetch(url)
	.then(promise => promise.json())
}

function quizSet (question , answer , value , category, id){
	this.question = question;
	this.answer   = answer;
	this.value 	  = value;
	this.category = category;
	this.id = id;

	 this.showInfo = function () {
		let source = document.querySelector('.game').innerHTML;
		let template = Handlebars.compile(source);
		let html = template(this);
		document.querySelector('.categories').insertAdjacentHTML('beforeend', html);
	}
}

function jeapordyInfo (info){
	let answer   = info.answer ;
	let question = info.question;
	let value 	 = info.value;
	let category = info.category.title;
	let id 		 = info.id;
	return new quizSet(question , answer , value, category, id)
}

getData()
.then(object => object.map(jeapordyInfo))
.then(info => info.forEach(pickles => pickles.showInfo()))


function userName () {
	let whereItGoes = document.getElementById("userName");
	let theName = document.getElementById("nameInput").value;
	whereItGoes.innerHTML = theName;
}

function display () {
	document.getElementById('question').style.display = 'none'
}


display()