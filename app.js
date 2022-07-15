import readline from "readline"

const rline = readline.createInterface({ input: process.stdin, output: process.stdout })

let lista = []
let propriedade = 'Digite uma propriedade CSS: '

function perguntaCss(propriedade){
    rline.question(propriedade, (name) => {
        if (name === "sair") {
            console.log(lista.sort());
            rline.close();
        } else {
            lista.push(name);
            perguntaCss(propriedade)
        }
    })
};

perguntaCss(propriedade);