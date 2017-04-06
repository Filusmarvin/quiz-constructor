// Creat an multiple choice object.
let li = "";

shortAnswer.prototype = Object.create(questions.prototype);
multiChoice.prototype = Object.create(questions.prototype);

function multiChoice (question, answer , choices, correct) {
	questions.call(this, question, answer)
	this.choices = choices;
	this.correct = correct;

	this.showInfo = function (){
 		let source = document.querySelector('#questions').innerHTML;
 		let template = Handlebars.compile(source);
 		let html = template(this);
		document.querySelector('.insert').insertAdjacentHTML('beforeend', html);
 		document.querySelector('.insert').innerHTML = html;
 		document.querySelector('.insert div:last-of-type ul').addEventListener('click', this.isCorrect.bind(this));
	}
		this.isCorrect = function (event) {
			let li = event.target
			let answerSection = li.parentElement.nextElementSibling;
			if( li.textContent === this.answer){
				answerSection.textContent = "I did it";
			}else {
			answerSection.textContent = "sorry skinny"
		}
	}
}


function questions (question, answer){
	this.question = question;
	this.answer = answer;
}

function shortAnswer(question, answer , text) {
	questions.call(this, question, answer);
	this.text = text;
	this.showInfo = function (){
 		let source = document.querySelector("#questions").innerHTML;
 		let template = Handlebars.compile(source);
 		let html = template(this);
 		document.querySelector('.insert').insertAdjacentHTML('beforeend', html);
		document.querySelector('.insert div:last-of-type ul').addEventListener('click', this.isCorrect.bind(this));

	}
}
shortAnswer.prototype = Object.create(questions.prototype);
multiChoice.prototype = Object.create(questions.prototype);

let q1 = new shortAnswer ('How many is alive?', "None", "The bus was traveling at 1000 miles per hour and flipped")
 console.log(q1);
let q2 = new multiChoice("You are the bus driver, what color are the bus driver's eyes?", "Brown", ["Red", "Yellow", "Black", "Brown"], "idk")
 console.log(q2)
q1.showInfo()
// [q1, q2 ].forEach(question => question.showInfo());


// this.showInfo = function (){
//  let source = document.querySelector(questions).innerHTML;
//  let template = Handlebars.compile(source)
//  let html = template(this)
// }
