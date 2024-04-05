
let express = require('express');
let app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log ("Servidor iniciado na porta 3000")
});

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/'+ 'index.html');
}
);    
let listaNomesHtml;
let nomes = ['Jorge', 'Maria', 'João', 'Ana'];
for(cont=0; cont<nomes.length; cont++){
  listaNomesHtml = listaNomesHtml + `<p> ${nomes[cont]} </p>`
}
app.get('/listar', (req, res) => {
  res.send(listaNomesHtml);

});
