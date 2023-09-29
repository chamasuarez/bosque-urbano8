import { useState } from "react";
import { Button, Stack, Box } from "@chakra-ui/react";
import React from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box W="40px" h="40px">
          <Button isDisabled ={contador >= 10} size="md" bg="orange" onClick={() => setContador(contador + 1)}>
            +
          </Button>
        </Box>
        <Box W="40px" h="40px">
          <p>{contador}</p>
        </Box>
        <Box W="40px" h="40px">
          <Button isDisabled={contador > 0} size="md" bg="orange"  onClick={() => setContador(contador - 1)}>
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
