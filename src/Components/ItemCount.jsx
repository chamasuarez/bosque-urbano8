import { useState } from "react";
import { Button, Stack, Box } from "@chakra-ui/react";
import React from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

  if (contador  <  0 )

  if (contador  >=  10)  


  return (
    <>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box W="40px" h="40px">
          <Button size="md" bg="orange" onClick={() => setContador(contador + 1)}>
            +
          </Button>
        </Box>
        <Box W="40px" h="40px">
          <p>{contador}</p>
        </Box>
        <Box W="40px" h="40px">
          <Button size="md" bg="orange"  onClick={() => setContador(contador - 1)}>
            -
          </Button>
          <Button colorScheme="green" size="md" align="center">
            Comprar
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default ItemCount;
