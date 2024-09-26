import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minimum = 5;
let maximum = 20;

let jeGetal = parseFloat(await userInput.question('Voer een getaal in: '));

if(jeGetal >= minimum && jeGetal <= maximum){
    console.log('Je getal ' + jeGetal + ' ligt tussen 5 en 20.');
}else{
    console.log('Je getal ' + jeGetal + ' ligt niet tussen 5 en 20.');
}

process.exit();