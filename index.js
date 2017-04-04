
var source   = document.querySelector("#quiz").innerHTML;
    var template = Handlebars.compile(source);
    var context = {title: "Javascript 101", question:""};
    var html    = template(context);
    var destination = document.querySelector('.handlebars-demo');
    destination.innerHTML = html;




// Question 1 "In Javascript you will need to first know how to refrence it in the html page. Which tags would you use?" Answer = "</script></script>"

let body = "body"
let script = "script"
let head = "head"
let title = "title"


let answerChoices = [ body, script, head, title ]
let question = "In Javascript you will need to first know how to refrence it in the html page. Which tags would you use?";
function questionSetOne (alpha, beta, capa, delta) {
this.alpha = choiceOne;
this.beta = choiceTwo;
this.cappa = choiceThree;
this.delta = choiceFour;
let choiceOne = answerChoices[0];
let choiceTwo = script;
let choiceThree = head;
let choiceFour = title;
console.log(choiceOne)
// let answerChoices = { body, script, head, title }
  }

// addEventListner('click', submit)

// Question 2 Javascript has a couple of properties that helps you locate things in the page, which one helps you locate an ID element? querySelector()

// Question 3 To properly use some/ if not most feature in java script you will need to learn two things. Select the two correct ones.
// CSS & HTML

// Question 4
//  function questionSetOne () {
//  
//  }


