'use strict';

let userName= prompt('What\'s Your Name ?');
console.log(typeof userName);
alert('welcome  '+ userName);

let userMajor= prompt('Am I in an IT major?');
switch(userMajor){
    case 'yes':
    case 'y':
        alert('Correct');
        console.log(userMajor);
        break;
        case 'no':
            case 'n':
            alert('thats incorrect');
            break;
            default:
                alert('pleas enter Lower case onley');
}

let secondQuestion= prompt('Am I currntly an employee?');
secondQuestion.toLowerCase;
switch (secondQuestion){
    case 'yes':
        case'y':
        //console.log(secondQuestion);
        alert('Unfortantly Am not an employee');
        break;
        case 'no':
            case'n':
            console.log(secondQuestion);
            alert('That\'s correct');
            break;
            default:
                alert('pleas enter Lower case onley');
} 

let thirdQuestion= prompt('do I like to read Books?');
thirdQuestion.toLowerCase;
switch(thirdQuestion){
    case 'yes':
    case 'y':
      alert('Thats True Books are My favourite!');
    break;
    case 'no':
    case 'n':
    alert('Sadly thats not correct');
    break;
            default:
                alert('pleas enter Lower case onley');
}

let forthQuestion=prompt('Am I using Windows?');

switch(forthQuestion){
    case 'yes':
    case 'y':
      alert('Thats True I have a windows');
    break;
    case 'no':
    case 'n':
    alert('Am afraid That\'s Incorrect ');
    break;
            default:
                alert('pleas enter Lower case onley');
}

let fifthQuestion=prompt('Do I use BING as a search engine?');
switch(fifthQuestion){
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