import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeMaand = await userInput.question('Voer een maand in: ');

let dag = 0;

switch(jeMaand){
    case 'januari':
        dag = 31;
        break;
    case 'februari':
         dag = '28 of 29';
        break;
    case 'maart':
        dag = 31;
        break;
    case 'april':
        dag = 30;
        break;
    case 'mei':
         dag = 31;
        break;
    case 'juni':
        dag = 30;
        break;
    case 'juli':
        dag = 31;
        break;
    case 'augustus':
        dag = 31;
        break;
    case 'september':
        dag = 30;
        break;    
    case 'oktober':
        dag = 31;
        break;    
    case 'november':
        dag = 30;
        break;    
    case 'december':
        dag = 31;
        break;    
  node 

    default:
    console.log('Onbekende maand ingevoerd !');
    process.exit();

} 
console.log('De maand ' + jeMaand + ' heeft ' + dag + ' dagen.');

process.exit();
