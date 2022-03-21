const pegaArquivo = require("./index")
const caminho = process.argv;
const validaURLs = require("./http-validacao")

async function processaTexto (caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    
    if (caminho [3] === "validar") {
        console.log("Links Validados: ", validaURLs(resultado)); 
    } else {
        console.log("Lista de links: ", resultado)
    }
}

processaTexto(caminho);