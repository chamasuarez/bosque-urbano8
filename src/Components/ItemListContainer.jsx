import { Flex, Square, AbsoluteCenter } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { mostrarProductos } from "./asyncmock/data";

const ItemListContainer = ({ greeting }) => {
  const [data, setData]= useState ([])
  

  useEffect(()=>{
    mostrarProductos
    .then((resultado) => {
    setData(resultado);
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
      <ItemCount initial={1} onAdd={onAdd}/>
      <ItemList productos={data} />
    </>
  );
};

export default ItemListContainer;
