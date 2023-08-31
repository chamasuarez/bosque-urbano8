import { Flex, Square, AbsoluteCenter } from "@chakra-ui/react";
import { useEffect } from 'react';
import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  let productos = [
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

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("No hay productos en stock");
    }
  });

  useEffect(()=>{
    mostrarProductos
    .then((resultado) => {
    console.log(resultado);
    })
    
    .catch((inexistente) => {
    console.log(inexistente);
    });
    },[]) 

  return (
    <>
      <Flex color="black">
        <Square size="200px">

          <AbsoluteCenter>{greeting}</AbsoluteCenter>
        </Square>
      </Flex>
  <ItemCount />
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
