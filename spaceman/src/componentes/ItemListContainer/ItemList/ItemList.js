
import React from "react";
import Item from "./Item/Item";



const productos = [
    {
        id:0,
        nombre: "manzana" ,
        precio: 20

    },
    {
        id: 1,
        nombre: "pera" ,
        precio: 30

    },
    {
        id:0,
        nombre: "naranja" ,
        precio: 50

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
function Itemlist ({Prod}) {
return (
   
    Prod.map((prod) => <Item key = {prod.id} prod = {prod}/>)
)
}

export default Itemlist; 