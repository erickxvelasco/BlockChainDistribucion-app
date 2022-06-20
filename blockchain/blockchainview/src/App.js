import logo from './logo.svg';
import './App.css';

import { databaseMiApp } from './firebaseconfig';
import { useEffect, useState } from 'react';
import { onChildAdded, ref } from 'firebase/database';
import { Blockchain } from './blockchain';
import {Block} from './block';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioBlock, setUsuariosBlock] = useState([]);

  const blockchain = new Blockchain();
  let leido = false;
  //const [datosBlock, setDatosBlock] = useState([]);
  useEffect(() => {
    if(!leido){
      
      escucharMensajes();
    }
    console.log("efect..................");
  }, [])

  function escucharMensajes() {
    leido = true;
    const db = databaseMiApp;
    const referenciaMensajes = ref(db, 'Usuarios');
    onChildAdded(referenciaMensajes, (data) => {
      if (data.exists()) {
        agregarnodo(data.val());
        
        setUsuarios(listaAnterior => {
          let listaNueva = [...listaAnterior, data.val()]
          //console.log(listaNueva);
          return listaNueva;
        });
      }
      //datosBlockchain();
    });
  }

  async function agregarnodo(dato){
    let block1 = new Block(dato, dato.correo);
    await blockchain.addBlock(block1);
    //console.log("nuevoagregado", blockchain.print());
    //console.log("nuevoagregadotipo____", typeof(blockchain.print()));
    //console.log("datoprint...", blockchain.getprint())
    setUsuariosBlock(blockchain.getprint());
    //console.log("bloque",await block1.getBlockData());
  }

  async function datosBlockchain(){
      const blockchain = await new Blockchain();
      for (var i in usuarios) {
        let block1 = new Block(usuarios[i], usuarios[i].correo);
        await blockchain.addBlock(block1);
        //console.log(userjson[i].userID)
      }
    
      /* const block2 = new Block({ data: "Block #2" });
      await blockchain.addBlock(block2);
      
      const block3 = new Block({ data: "Block #3" });
      await blockchain.addBlock(block3); */
      //console.log(blockchain.print())
      //console.log("blockchain", blockchain.print());
    }

  return (
    <div className="App">
      Usuarios
      <div style={{}}>
      {usuarioBlock.map((e, indice) =>
        <div key={e.hash} class="card" style={{width:"18rem", display:"inline-block"}}>
            <div class="card-body">
              <h5 class="card-title">{e.Block}</h5>
              <p>Hash:{e.hash}</p>
              <p>Hash anterior:{e.previousBlockHash}</p>
              <p>datos:{e.body}</p>
            </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
