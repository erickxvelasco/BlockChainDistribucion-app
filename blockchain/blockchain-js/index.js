const Blockchain = require("./src/blockchain");
const Block = require("./src/block");

const users=`
     {
        "4f1b362e-7824-4afa-913d-8009a177da79":{
           "apellidos":"velasco",
           "contrasena":"123",
           "correo":"velasco23erick@gmail.com",
           "nombres":"erick",
           "userID":"4f1b362e-7824-4afa-913d-8009a177da79"
        },
        "7270f6bb-25f4-49c0-9eea-e4a499c0e995":{
           "apellidos":"Morales",
           "contrasena":"arconte",
           "correo":"moraleslionel792@gmail.com",
           "nombres":"Lionel",
           "userID":"7270f6bb-25f4-49c0-9eea-e4a499c0e995"
        },
        "7d3b2a6e-a587-4c05-92a3-e5167cb9f4b5":{
           "apellidos":"Choque ",
           "contrasena":"Minipelaez",
           "correo":"jason@gmail.com",
           "nombres":"Jason",
           "userID":"7d3b2a6e-a587-4c05-92a3-e5167cb9f4b5"
        },
        "a181af74-f3e5-4f8b-abb9-e97a3e64680f":{
           "apellidos":"velasco",
           "contrasena":"123456",
           "correo":"velasco23erick@gmail.com",
           "nombres":"erick",
           "userID":"a181af74-f3e5-4f8b-abb9-e97a3e64680f"
        },
        "bd2d01af-d72d-472d-8d4b-d51d20f64d90":{
           "apellidos":"morales",
           "contrasena":"jhon102030",
           "correo":"jhonmorales@gmail.com",
           "nombres":"jhon",
           "userID":"bd2d01af-d72d-472d-8d4b-d51d20f64d90"
        }
     } 
`;

const data=`
{"data" : "poner data aqui"}
`;



const userjson = JSON.parse(users);
const datajson = JSON.parse(data);



async function run() {
  const blockchain = await new Blockchain();
  for (var i in userjson) {
    let block1 = new Block(datajson, userjson[i].correo);
    await blockchain.addBlock(block1);
    //console.log(userjson[i].userID)
  }

  

  /* const block2 = new Block({ data: "Block #2" });
  await blockchain.addBlock(block2);
  const block3 = new Block({ data: "Block #3" });
  await blockchain.addBlock(block3); */

  blockchain.print();
}



run();
