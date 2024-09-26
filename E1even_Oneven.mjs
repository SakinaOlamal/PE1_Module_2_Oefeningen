import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeGetal = parseFloat(await userInput.question('Voer een getaal in: '));

if(jeGetal % 2 == 0){
    console.log('Even');
}else{
    console.log('Oneven');
}

process.exit();