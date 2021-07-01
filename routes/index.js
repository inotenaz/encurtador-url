var express = require('express');
var router = express.Router();
const Link = require('../models/link');


function geradordeCódigo() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

// - um método de encurtar uma URL persistindo-a no banco de dados.
router.post('/encurtar', async (req, res, next) => {
  const { url, dayofregister } = req.body;
  const code = 'http://meusite.com/' + geradordeCódigo();

  const resultado = await Link.create({
    url,
    code,
    dayofregister
  })
  return res.json(resultado);
 
});

// - um método que retorna uma url encurtada conforme um id.
router.get('/encontrar/:id', async (req, res, next) => {
  const id = req.params.id;
  const resultado = await Link.findOne({ where: { id } });
   if (!resultado) return res.sendStatus(404);
   return res.json(resultado.url);
 });

// - um método que retorna todas as URLs encurtadas em uma data específica.
 router.post('/encontrarpordata', async (req, res, next) => {
   const dayofregister = req.body.dayofregister;

   const resultado = await Link.findAll({ where: { dayofregister } });
   if (!resultado) return res.sendStatus(404);
 
   return res.json(resultado);

 });

 // - um método que retorna uma url encurtada conforme o encurtamento da URL.
 router.post('/retornar', async (req, res, next) => {
  const code = req.body.code;

  const resultado = await Link.findOne({ where: { code } });
  if (!resultado) return res.sendStatus(404);

  return res.json(resultado.url);

});

module.exports = router;
