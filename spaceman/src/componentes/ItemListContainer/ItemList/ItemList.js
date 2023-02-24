
import React from "react";
import Item from "./Item/Item";
import "./ItemList.css"


const productos = [
    {
        id:0,
        nombre: "manzana" ,
        precio: 20,
        imagen :"../../public/imagenesprod/product1.jpeg",
    },
    {
        id: 1,
        nombre: "pera" ,
        precio: 30,
        imagen :"../../public/imagenesprod/producto2.jpeg",
    },
    {
        id:2,
        nombre: "naranja" ,
        precio: 50,
        imagen :"../../public/imagenesprod/producto3.jpeg",

}
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
 
<div className="listaProductos">
    {
  prod.map((prod) => <Item key = {prod.id} prod = {prod}/>)
  }
   

  </div>
)
}

export default Itemlist; 