const readline = require('readline');


const options = ["piedra", "papel", 'tijera']

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const main = () => {
    console.clear() 
    rl.question('Elegi tu opcion \n 1-piedra \n 2-papel \n 3-tijera \n... ', (answer) => {
        console.log(`Elegiste la opcion ${options[answer-1]}`)
        
       rl.question('otro juego ?\n 1-Si\n 2 - no ', (op) => {
            if(op == '1') main();
            else rl.close(); 
        });
    });
}



main()