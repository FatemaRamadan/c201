'use strict';
let score = 0;

let userName = prompt('What\'s Your Name ?');
console.log(typeof userName);
alert('welcome  ' + userName);

function question1(){
let userMajor = prompt('Am I in an IT major?');
switch (userMajor) {
    case 'yes':
    case 'y':
        alert('Correct');
        score++;
        console.log(userMajor);
        break;
    case 'no':
    case 'n':
        alert('thats incorrect');
        break;
    default:
        alert('pleas enter Lower case onley');
}
}
question1();

function question2(){
let secondQuestion = prompt('Am I currntly an employee?');
secondQuestion.toLowerCase;
switch (secondQuestion) {
    case 'yes':
    case 'y':
        //console.log(secondQuestion);
        alert('Unfortantly Am not an employee');
        break;
    case 'no':
    case 'n':
        console.log(secondQuestion);
        alert('That\'s correct');
        score++;
        break;
    default:
        alert('pleas enter Lower case onley');
}
}
question2();

function question3(){
let thirdQuestion = prompt('do I like to read Books?');
thirdQuestion.toLowerCase;
//console.log(thirdQuestion);
switch (thirdQuestion) {
    case 'yes':
    case 'y':
        alert('Thats True Books are My favourite!');
        score++;
        break;
    case 'no':
    case 'n':
        alert('Sadly thats not correct');
        break;
    default:
        alert('pleas enter Lower case onley');
}
}
question3();
function question4(){
let forthQuestion = prompt('Am I using Windows?');
forthQuestion.toLowerCase;
//console.log(forthQuestion);
switch (forthQuestion) {
    case 'yes':
    case 'y':
        alert('Thats True I have a windows');
        score++;
        break;
    case 'no':
    case 'n':
        alert('Am afraid That\'s Incorrect ');
        break;
    default:
        alert('pleas enter Lower case onley');
}
}
question4();
// is this good?
function question5(){
let fifthQuestion = prompt('Do I use BING as a search engine?');
fifthQuestion.toLowerCase;
//console.log(fifthQuestion);
switch (fifthQuestion) {
    case 'yes':
    case 'y':
        alert('No,Google is my favourite');
        break;
    case 'no':
    case 'n':
        alert('Correct, you must be using it too!');
        break;
    default:
        alert('pleas enter Lower case onley');
}

alert('Thank You  ' + userName);
}
question5();
function question6(){
let sixthQuestion = prompt('Let\'s play a game ! I want you to guess a number, if you guessed right you win, if you didn\'t..... rembermber you have 4 trials!!');
sixthQuestion = Number(sixthQuestion);
console.log(sixthQuestion);
if (sixthQuestion < 3) {
    alert('Too Low ,Remember you have 4 tries now');
    for (let i = 0; i < 4; i++) {
        if (sixthQuestion == 3) {
            alert('correct');
            score++;
            break;
        } else if(sixthQuestion <3) {
            sixthQuestion = prompt('try again number is too low ');
        }else if (sixthQuestion >3) {
            sixthQuestion = prompt('Too High');
        }
    }
}
else if (sixthQuestion > 3) {
    alert('too High');
    for (let i = 0; i < 4; i++) {
        if (sixthQuestion == 3) {
            alert('correct');
            score++;
        } else if (sixthQuestion >3){
            sixthQuestion = prompt('Number is High try again');
        }else if(sixthQuestion <3){
            sixthQuestion=prompt('Number is Low');
        }

    }alert('The correct answer is 3');
}
}

question6();

function question7(){
let color = ['red','blue','green','yellow'];

for(let i=0;i<6;i++){
    let guess = prompt('whats my faourite colore is it  ?');
       for ( let y =0 ;y<= color.length;y++){

        if (guess==color[y]){
            alert('correct');
            i=7;
            score++
            break;
        }
       }

 }   
 alert (`my favorite colors are `+color); 
}
question7();  
    // if(guess === 'red'){
    //     alert('correct');
    //     score++;
    //     break;
    // }else {
    //     guess=prompt('Try again pleas Wrong answer');

    // }
    // }
    // alert('you have scored '+ score);

