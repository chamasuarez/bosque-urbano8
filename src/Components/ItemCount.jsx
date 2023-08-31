import { useState } from "react";
// import {
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Spacer,
// } from "@chakra-ui/react";
import React from "react";

const ItemCount = () => {
  const [contador, SetContador] = useState(0);

  const sumar = () => {
    if (contador < 10) {
      SetContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador >= 20) {
      SetContador(contador - 1);
    }
  };

  const onAdd = () => {
    alert (contador)
  }  

  return (
    <>
      <div className="ItemContador">
        {/* <NumberInput size="sm" defaultValue={20} min={10}>
          <NumberInputField focusBorderColor="red.200" />
          <NumberInputStepper>
            <NumberIncrementStepper
              bg="green.200"
              _active={{ bg: "green.300" }}
              children="+"
            />
            <NumberDecrementStepper
              bg="red"
              _active={{ bg: "red" }}
              children="-"
            />
          </NumberInputStepper>
        </NumberInput> */}
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
        <button onClick={onAdd}>Mostrar cantidad</button>
        <Spacer />
        <button onClick={restar}>-</button>
        <button onClick={onAdd}>Mostrar cantidad</button>
      </div>
    </>
  );
};

export default ItemCount;
