const pegaArquivo = require("./index")
const caminho = process.argv;

async function processaTexto (caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    console.log("Lista de links: ", resultado)
}

processaTexto(caminho);