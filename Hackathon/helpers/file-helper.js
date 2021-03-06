const fs = require('fs'),
      sharp = require('sharp');
var path = require("path");
    
exports.compressImage = (file, size) => {
  
 // Pegamos o PATH antigo e fazemos um tratamento com ele, para mudar a extensão do arquivo.
 const newPath = file.path.split('.')[0] + '.webp';
 
  
    return sharp(file.path) // Executamos o SHARP na imagem que queremos comprimir
  
        .resize(size) //Redimensionamos para o tamanho (se não receber esse parâmetro, não redimensiona
  
        .toFormat('webp') // Forçamos a conversão esse arquivo para webp
  
        .webp({ // Comprimimos, setando uma qualidade
            quality: 100
        })
  
        .toBuffer() // Transformamos esse arquivo em um Buffer
  
        .then(data => {
            // Temos o buffer disponível para tratamento
        })   
}

exports.compressImage = (file, size) => {
    const newPath = file.path.split('.')[0] + '.webp';  
    return sharp(file.path)
        .resize(size)
        .toFormat('webp')
        .webp({
            quality: 100
        })
        .toBuffer()
        .then(data => {

            // Deletando o arquivo antigo
            // O fs.acess serve para testar se o arquivo realmente existe, evitando bugs
            fs.access(file.path, (err) => {

                // Um erro significa que a o arquivo não existe, então não tentamos apagar
                if (!err) {
                    
                    //Se não houve erros, tentamos apagar
                    fs.unlink(file.path, err => {

                        // Não quero que erros aqui parem todo o sistema, então só vou imprimir o erro, sem throw.
                        if(err) console.log(err)
                    })
                }
            });
            
            //Agora vamos armazenar esse buffer no novo caminho
            fs.writeFile(newPath, data, err => {
                if(err){
                    // Já aqui um erro significa que o upload falhou, então é importante que o usuário saiba.
                    throw err;
                }
            });
            const name = path.basename(newPath)
            // Se o código chegou até aqui, deu tudo certo, então vamos retornar o novo caminho
            return name;
        })
}