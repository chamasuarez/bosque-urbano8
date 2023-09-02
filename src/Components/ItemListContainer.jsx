import { Flex, Square, AbsoluteCenter } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import React from "react";
import ItemList from "./ItemList";
import { getProductos } from "./asyncmock/data";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos]= useState ([])
  
    useEffect(()=>{
    getProductos
    .then((resultado) => {
    setProductos(resultado);
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
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
