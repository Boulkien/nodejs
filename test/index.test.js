const pegaArquivo = require ("../index"); 

const arrayResult = [
    {
        FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
    }
]

describe("pegaArquivo::", () => { 
    it("Deve ser uma função", () => {
        expect(typeof pegaArquivo).toBe("function")
    })
    it("Deve retornar Array com resultados", async () => {
        const result = await pegaArquivo("./test/arquivos/texto1.md")
        expect(result).toEqual(arrayResult)
    }) 
    it('Deve retornar a mensagem "Não há links"', async () => {
        const result = await pegaArquivo("D:/Alura/NodeJs/CriandoPrimeiraBiblioteca/test/arquivos/texto1_semlinks.md")
        expect(result).toBe("não há links.")
    })
})
