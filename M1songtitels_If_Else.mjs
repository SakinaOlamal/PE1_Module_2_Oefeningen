import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

console.log("Kies een artiest:");
console.log(" 1. Billie Eilish");
console.log(" 2. Michael Jackson");
console.log(" 3. Alicia Keys");
console.log(" 4. Justin Bieber");


let keuze = await userInput.question('Geef je keuze in (nummer): ');

if (keuze == 1) {
    console.log('Je koos voor "Billie Eilish"');
    console.log('Zij is de artist achter de hit: Bad Guy.');
}else if (keuze == 2) {
    console.log('Je koos voor "Michael Jackson"');
    console.log('Hij is de artist achter de hit: Billie Jean.');
}else if (keuze == 3) {
    console.log('Je koos voor "Alicia Keys"');
    console.log('Zij is de artist achter de hit: Girl on Fire.');
}else if (keuze == 4) {
    console.log('Je koos voor "Justin Bieber"');
    console.log('Hij is de artist achter de hit: Sorry.');
}else {
    console.log('Ongeldige keuze!');
}

process.exit();


