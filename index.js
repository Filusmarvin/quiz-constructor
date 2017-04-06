let urlUno = "https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple"
let urlDos = "https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=boolean"

function getData() {
  return fetch(urlUno)
  .then(response => response.json())
}
function getDataTwo() {
  return fetch(urlDos)
  .then(response => response.json())
}

function quesInfo (ques) {
  this.question = ques.question;
    console.log(this.question);
  this.correctAnswers = ques.correct_answer;
    console.log(this.correctAnswers);
  this.incorrectAnswers = ques.incorrect_answers;
    console.log(this.incorrectAnswers);
return new quiz(question, correctAnswers, incorrectAnswers)
console.log(quiz(question, correctAnswers, incorrectAnswers))
}

getData().then(jsonData =>jsonData.results)
.then(array => array.map(quesInfo))
.then(quiz => quiz.forEach(pickles => pickles.showInfo()))

console.log(getDataTwo().then(jsonData =>jsonData.results[0]))
// .then(array => array.map(quesInfo))
// .then(quiz => quiz.forEach(pickles => pickles.showInfo()))

function multipleChoice(){

}

li ="";
correctAnswer = "";
let wrongAnswers = ['head', 'title', 'body']

function quiz (question, rightAnswer, choices){
	this.question = question;
	this.rightAnswer = rightAnswer;
	this.choices = choices;

		this.answer = function (event) {
  			let li = event.target;
  			let correctAnswer = li.parentElement.nextElementSibling;
  		 if (li.textContent == this.rightAnswer){
  			correctAnswer.textContent = "Correct";
  		}
  		else{
  			correctAnswer.textContent = "Incorrect";
  		}
  	}

	this.showInfo = function (){
			let source   = document.querySelector("#quiz").innerHTML;
   	 	let template = Handlebars.compile(source);
  	 	let html   	 = template(this);
			document.querySelector('.test').insertAdjacentHTML('beforeend', html);
  	  document.querySelector('.test div:last-of-type ul').addEventListener('click', this.answer.bind(this));
	}

}
function username(){

}
// var q1 = new quiz('To write JS what tags would you need?', "script" , ['title' , 'head' , 'li' , "script"]);
// var q2 = new quiz("to do this assignment what do you need?","knowledge", ['gratitude', 'magnitude', 'aptitude', 'knowledge']);
// [q1, q2 ].forEach(question => question.showInfo());
