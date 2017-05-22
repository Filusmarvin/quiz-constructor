let url = "http://jservice.io/api/random?count=3";
let array = []

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
	// array.push(id)
	// console.log(array)

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
.then(info => info.forEach((pickles) => {
	array.push(pickles.id)
	pickles.showInfo()
	console.log(pickles)
	console.log(array)
}))


function userName () {
	let whereItGoes = document.getElementById("userName");
	let theName = document.getElementById("nameInput").value;
	whereItGoes.innerHTML = theName;
}

function getInfo (selectId){
	// categoryInfo = info;
	console.log(selectId);
	array.map((id) => {
		if(id !== selectId){
			let el = document.getElementById(id);
			el.style.display = 'none';
			
		}
	})
	// console.log(array)
}
// now I need to have the ID correlate
//to the question and have that
// question display.
