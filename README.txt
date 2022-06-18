# encurtador-url
Projeto Encurtador-Url (Desenvolvimento Mobile Unyleya - Aluno Sergio Zanetoni Junior)

Projeto disponibilizado no Heroku pelo link ==> https://encurtar-url.herokuapp.com/
Ultizar o PostMan para rodar o aplicativo, já que é necessário enviar o body da requisição para os métodos do tipo Post.

____________________
Método para encurtar uma URL persistindo-a no banco de dados:
Utilize https://encurtar-url.herokuapp.com/encurtar com o seguinte Body Json:
{ 
    "url": "aqui-a-url-a-ser-encurtada.com/start", // aqui a Url a ser encurtada
    "dayofregister": "01/07/2021" //aqui vai a data do dia do registro modelo DD/MM/AAAA
}

Saida:
Json com todo o registro do Banco de dados.
Exemplo:
{
    "id": 1,
    "code": "http://meusite.com/oI5KB",
    "url": "jahsdkjhas/askdhkajds/asdk",
    "dayofregister": "24/05/2154",
    "hits": 0,
    "createdAt": "2021-07-01T20:46:24.938Z",
    "updatedAt": "2021-07-01T20:46:24.938Z"
}

_______________________
Método que retorna uma url encurtada conforme um id:
Utilize https://encurtar-url.herokuapp.com/encontrar/:id em que ":id" é a chave primária do registro no BD.

Saída:
A url encurtada.

________________________
Método que retorna todas as URLs encurtadas em uma data específica:
Utilize https://encurtar-url.herokuapp.com/encontrarpordata com o seguinte Body Json:
{ 
    "dayofregister": "01/07/2021" //aqui vai a data do dia do registro modelo DD/MM/AAAA
}

Saída:
Json com todos os registros do BD para a data em questão.

________________________
Método que retorna uma url encurtada conforme o encurtamento da URL.
Utilize https://encurtar-url.herokuapp.com/retornar com o seguinte Body Json:
{ 
    "code": "http://meusite.com/oI5KB" //aqui vai o encurtamento da Url
}
Saída:
A url encurtada (a Url original que foi encurtada)
