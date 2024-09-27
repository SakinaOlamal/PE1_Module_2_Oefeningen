import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

console.log("Kies een artiest:");
console.log(" 1. Billie Eilish");
console.log(" 2. Michael Jackson");
console.log(" 3. Alicia Keys");
console.log(" 4. Justin Bieber");

let jeKeuze = await userInput.question('Geef je keuze in (nummer): ');

let hit = 0;

switch(jeKeuze){

    case '1':
        console.log('Je koos voor "Billie Eilish"');
        console.log('Zij is de artist achter de hit: Bad Guy.');
        break;
    case '2':
        console.log('Je koos voor "Michael Jackson"');
        console.log('Hij is de artist achter de hit: Billie Jean.');
        break;
    case '3':
        console.log('Je koos voor "Alicia Keys"');
        console.log('Zij is de artist achter de hit: Girl on Fire.');
        break;
    case '4':
        console.log('Je koos voor "Justin Bieber"');
        console.log('Hij is de artist achter de hit: Sorry.');
        break;


    default:
        console.log('Ongeldige keuze!');
        process.exit();      

} 

process.exit();       
        