// Creat an multiple choice object.

function multiChoice (question, answer , choices, correct) {
	questions.call(this, question, answer)
	this.choices = choices;
	this.correct = correct;

	this.showInfo = function (){
 let source = document.querySelector('#questions').innerHTML;
 let template = Handlebars.compile(source);
 let html = template(this);
 document.querySelector('.insert').innerHTML = html;
}
}

function questions (question, answer){
	this.question = question;
	this.answer = answer;
}

function shortAnswer(question, answer , text) {
	questions.call(this, question , answer);
	this.text = text;	

	this.showInfo = function (){
 let source = document.querySelector('#questions').innerHTML;
 let template = Handlebars.compile(source);
 let html = template(this);
 document.querySelector('.insert').innerHTML = html;
}
}
shortAnswer.prototype = Object.create(questions.prototype);
multiChoice.prototype = Object.create(questions.prototype);

 let q1 = new shortAnswer ('How many is alive?', "None", "The bus was traveling at 1000 miles per hour and flipped") 
 console.log(q1);
 q1.showInfo()

 let q2 = new multiChoice("You are the bus driver, what color are the bus driver's eyes?", "Dark Brown", ["red", "yellow", "black", "brown"], "idk")
 console.log(q2)
q2.showInfo()



// this.showInfo = function (){
//  let source = document.querySelector(questions).innerHTML;
//  let template = Handlebars.compile(source)
//  let html = template(this)
// }