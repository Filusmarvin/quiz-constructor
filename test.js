// Creat an multiple choice object.
let li = "";

ShortAnswer.prototype = Object.create(quesBase.prototype);
MultiChoice.prototype = Object.create(quesBase.prototype);

function MultiChoice (question, answer , choices, correct) {
	quesBase.call(this, question, answer, choices)
	this.correct = correct;

	this.showInfo = function (){
 		let source = document.querySelector('#set').innerHTML;
 		let template = Handlebars.compile(source);
 		let html = template(this);
		document.querySelector('.insert').insertAdjacentHTML('beforeend', html);
 // 		document.querySelector('.insert').innerHTML = html;
 // 		document.querySelector('.insert div:last-of-type ul').addEventListener('click', this.isCorrect.bind(this));
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


function quesBase (question, answer, choices){
	this.question = question;
	this.answer = answer;
	this.choices = choices
}

function ShortAnswer(question, answer , choices) {
	quesBase.call(this, question, answer, choices);
	this.showInfo = function (){
 		let source = document.querySelector("#set").innerHTML;
 		let template = Handlebars.compile(source);
 		let html = template(this);
		document.querySelector('.insert').innerHTML = html;
		// document.querySelector('.insert').insertAdjacentHTML('beforeend', html)
		document.querySelector('.insert div:last-of-type ul')//.addEventListener('click', this.isCorrect.bind(this));

	}
}

let q1 = new ShortAnswer ('Bus is traveling at a 1000mph and crashes. How many is alive?', "None", ['True' , 'False'])
 console.log(q1);
 q1.showInfo()
let q2 = new MultiChoice("You are the bus driver, what color are the bus driver's eyes?", "Brown", ["Red", "Yellow", "Black", "Brown"], "idk")
 console.log(q2)
q2.showInfo()
// [q1, q2 ].forEach(pickles => pickles.showInfo());


// this.showInfo = function (){
//  let source = document.querySelector(questions).innerHTML;
//  let template = Handlebars.compile(source)
//  let html = template(this)
// }
