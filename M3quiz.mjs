import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let score = 0;

console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen: ');

let vraag1 = await userInput.question('Vraag 1: Wat is de hoofdstad van Frankrijk? ');

if (vraag1 == 'Parijs' || vraag1 == 'parijs'){
    console.log('Jouw antwoord: ' + vraag1)
    console.log('Juist!');
    score++;
}else{
    console.log('Fout!')
}
let vraag2 = await userInput.question('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel? ');

if (vraag2 == '8'){
    console.log('Jouw antwoord: ' + vraag2)
    console.log('Juist!');
    score++;
}else{
    console.log('Fout!')
    
}
let vraag3 = await userInput.question('Vraag 3: Wat is het grootste zoogdier ter wereld? ');

if (vraag3 == 'Blauwe vinvis' || vraag3 == 'blauwe vinvis'){
    console.log('Jouw antwoord: ' + vraag3)
    console.log('Juist!');
    score++;
}else{
    console.log('Fout!')
    
}
let vraag4 = await userInput.question('Vraag 4: Wie schreef het toneelstuk "Romeo en Julia"? ');

if (vraag4 == 'Shakespeare' || vraag4 == 'shakespeare') {
    console.log('Jouw antwoord: ' + vraag4);
    console.log('Juist!');
    score++; 
} else {
    console.log('Fout!');
}
let vraag5 = await userInput.question('Vraag 5: Hoeveel poten heeft een spin? ');

if (vraag5 == '8') {
    console.log('Jouw antwoord: ' + vraag5);
    console.log('Juist!');
    score++; 
} else {
    console.log('Fout!');
}

console.log('Je hebt ' + score + ' van de 5 vragen juist beantwoord. '  )

process.exit();