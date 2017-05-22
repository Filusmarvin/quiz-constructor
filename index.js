let urlUno = "https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple"


function getData() {
  return fetch(urlUno)
  .then(response => response.json())
}


function quesInfo (ques) {
  let question = ques.question; // this in here is being referred to as the window object which
    console.log(question);
  let correctAnswers = ques.correct_answer;
    console.log(correctAnswers);
  let incorrectAnswers = ques.incorrect_answers;
    console.log(incorrectAnswers);
return new Question(question, correctAnswers, incorrectAnswers)
}

getData().then(jsonData =>jsonData.results)
.then(array => array.map(quesInfo))
.then(quiz => quiz.forEach(pickles => pickles.showInfo()))


li ="";
correctAnswer = "";
let wrongAnswers = []

function Question (question, rightAnswer, choices){
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
