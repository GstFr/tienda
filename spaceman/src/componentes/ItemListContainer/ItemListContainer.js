import React, {useEffect, useState} from 'react';
import {getFetch} from './ItemList/ItemList';
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemListContainer () {

const [Productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
  
useEffect(()=>{

getFetch

.then((respuesta)=> setProductos(respuesta))
.catch (err => console.log(err))
.finally(() => setLoading(false))
},[])



  return (
    
    <div>
      {
        loading ?
        < h1 >Esperanos unos segundos...</h1>
        :
        <div >
          <h1>Productos de temporada</h1>
          <div >
            <ItemList prod = {Productos}/>
          </div>
        </div>
      }
    </div>
  );
}

export default  ItemListContainer;