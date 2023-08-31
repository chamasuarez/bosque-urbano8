import { useEffect, useState } from 'react';
import React from 'react'

const ItemDetailContainer = () => {

  const productos = [
    {
      id: 1,
      nombre: "Banqueta",
      descripcion: "descripcion de producto",
      precio: "95.000",
    },
    {
      id: 2,
      nombre: "Mesa",
      descripcion: "descripcion de producto",
      precio: "85000",
    },
    {
      id: 3,
      nombre: "Sillon",
      descripcion: "descripcion de producto",
      precio: "75000",
    },
    {
      id: 4,
      nombre: "Casita infantil",
      descripcion: "descripcion de producto",
      precio: "70000",
    },
    {
      id: 5,
      nombre: "Reposera",
      descripcion: "descripcion de producto",
      precio: "60000",
    },
  ];

  const getProducto () =  => {
    return new Promise((resolve, reject) => {
    if (productos.length === 0) {
      reject(new Error ("No hay productos en stock"));
    }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    
    })
  };

  const getProductos = async () => { 
    const response = await fetch ()
    const data = await response.json () 
    console.log(data)
     
    return data
  }

  const [producto,setProducto]= useState ([] )
   console.log (producto)

   useEffect (() => { 
  getProductos().then ((producto) => setProducto (producto))
}, [])


return (
<>

</>

)


export default ItemDetailContainer