
// var source   = document.querySelector("#quiz").innerHTML;
//     var template = Handlebars.compile(source);
//     var context = {title: "Javascript 101", question:""};
//     var html    = template(context);
//     var destination = document.querySelector('.test');
//     destination.innerHTML = html;

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
  			console.log("What the FUDGE!")
  			console.log(li.textContent.length == this.rightAnswer.length)
  		 	console.log(this.rightAnswer == li.textContent)
  		}
  	}

	this.showInfo =function (){
		let source   = document.querySelector("#quiz").innerHTML;
   	 	let template = Handlebars.compile(source);
  	 	let html    = template(this);
  	  	document.querySelector(".test").innerHTML= html;
  	  document.querySelector('.test div:last-of-type ul').addEventListener('click', this.answer.bind(this));
	}

  		
  	}
  





let question1 = new quiz('To write JS what tags would you need?', "script" , ['title' , 'head' , 'li' , "script"]);
quiz()
console.log(question1);
question1.showInfo()
console.log(li)
console.log(this.rightAnswer)
console.log()