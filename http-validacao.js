const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function geraArrayDeURLs (arrayLinks){
    //loop for each key; value
    // object --> return values in a array
    // Object.values(objeto)
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

function validaURLs(arrayLinks) {
    return geraArrayDeURLs (arrayLinks)
}

module.exports = validaURLs; 