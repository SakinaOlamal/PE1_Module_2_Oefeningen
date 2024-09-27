import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('Voer een getal in: '));
let getal2 = parseFloat(await userInput.question('Voer een tweede getal in: '));

console.log('Kies een bewerking: ');
console.log('1. Optellen');
console.log('2. Aftrekken');
console.log('3. Vermenigvuldigen');
console.log('4. Delen');


let jeKeuze = await userInput.question('Voer je gekozen bewerking in: ');

let totaal;

switch(jeKeuze){
    case '1':
        totaal = getal1 + getal2;
        console.log('Resultaat: ' + getal1 + ' + ' + getal2 + ' = ' + totaal);
        break;
    case '2':
         totaal = getal1 - getal2;
         console.log('Resultaat: ' + getal1 + ' - ' + getal2 + ' = ' + totaal);
        break;
    case '3':
        totaal = getal1 * getal2;
        console.log('Resultaat: ' + getal1 + ' * ' + getal2 + ' = ' + totaal);
        break;
    case '4':
        if (getal2 == 0) {
            console.log('Delen door nul kan niet!');
            break;
        }
        totaal = getal1 / getal2;
        console.log('Resultaat: ' + getal1 + ' / ' + getal2 + ' = ' + totaal);
        break;

    default:
        console.log('Onbekende getal ingevoerd!');
        break;

} 

process.exit();
