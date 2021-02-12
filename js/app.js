'use strict';let score = 0;

let userName = prompt('What\'s Your Name ?');

alert('welcome  ' + userName);

function question1(){
let userMajor = prompt('Am I in an IT major?');
switch (userMajor) {
    case 'yes':
    case 'y':
        alert('Correct');
        score++;

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

function question5(){
let fifthQuestion = prompt('Do I use BING as a search engine?');
fifthQuestion.toLowerCase;
switch (fifthQuestion) {
    case 'yes':
    case 'y':
        alert('No,Google is my favourite');
        break;
    case 'no':
    case 'n':
        alert('Correct, you must be using it too!');
        score++
        break;
    default:
        alert('pleas enter Lower case onley');
}

alert('Thank You  ' + userName);
}
question5();
function question6(){

    let answer = 3;
    for(let i=0; i<4;i++){
        let questionSix = prompt('Lets Play a Game Can us guess anumber from 1-10, if you guessed right you get a score !' );
        if (questionSix == answer){
            alert ('Correct!');
            score++
            break;
        }else if (questionSix > answer){
            alert ('too high');
        }
    else if (questionSix < answer ){
        alert('Too Low')
    }
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
alert ('you have scored  '+ score);
