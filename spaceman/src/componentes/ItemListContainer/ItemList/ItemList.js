import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Item from "./Item/Item";
import "./ItemList.css"
import Stack from 'react-bootstrap/Stack';

const productos = [
    {
        id:0,
        nombre: "manzana" ,
        precio: 20,
        imagen :"./product1.jpeg",
    },
    {
        id: 1,
        nombre: "pera" ,
        precio: 30,
        imagen :"./producto2.jpeg",
    },
    {
        id:2,
        nombre: "naranja" ,
        precio: 50,
        imagen :"./producto3.jpeg",
    },

]

export const getFetch = new Promise ((respuesta, rejected) => {

let url = "www.laverdu.com.ar"
if (url === "www.laverdu.com.ar") {
    setTimeout(()=>{ respuesta(productos);}, 3000)
} 
else {
    rejected ("error")
}

})
;
function Itemlist ({prod}) {
return (
 
<Stack direction="horizontal" gap={3} className="listaProductos">
    {
  prod.map((prod) => <Item key = {prod.id} prod = {prod}/>)
  }
   

  </Stack>
)
}

export default Itemlist; 