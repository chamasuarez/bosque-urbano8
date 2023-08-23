import { Flex, Square, Text, Center } from "@chakra-ui/react";
import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Flex color="black">
      <Square bg="orange" size="200px">
        <Center w="100%" p={4}>
          <Text>{greeting}</Text>
        </Center>
      </Square>
    </Flex>
  );
};

export default ItemListContainer;
