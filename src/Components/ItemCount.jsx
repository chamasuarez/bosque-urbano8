import { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const ItemCount = ({ onAdd, initial }) => {
  const [contador, SetContador] = useState(initial);

  const sumar = () => {
    if (contador < 10) {
      SetContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      SetContador(contador - 1);
    }
  };

  return (
    <>
      <div className="ItemContador">
        <NumberInput size="sm" defaultValue={10} min={0}>
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
        </NumberInput>
        <p>{contador}</p>
        <Spacer />
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <Spacer />
        <button onClick={onAdd}>Comprar</button>
        </div>
    </>
  );
};

export default ItemCount;
