const fs = require ("fs"); 
const { encode } = require("punycode");

function trataErro (erro) {
    throw new Error (erro); 
}

// then || catch
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8";

//     fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(texto))
//     .catch((erro) => trataErro(erro))
// }

// async || await
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = "utf-8"
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(texto)
    } catch(erro) {
        trataErro(erro)
    }
}

// function pegaArquivo (caminhoDoArquivo) {
//     const encoding = "utf-8"

//     fs.readFile(caminhoDoArquivo, encoding, (erro, data) => {
        
//         if (erro) {
//             trataErro(erro)
//         }

//         console.log(data)
//     })
// }

pegaArquivo("texto1.md")