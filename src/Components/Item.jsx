import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  console.log(producto);

  return (
    <>
      <div
        className="margin-top-70"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          size:"xl"
        }}
      >
        <Flex>
          <Card maxW="xl">
            <CardBody>
              <Image src={producto.imagen} alt="" borderRadius="xl" />
              <Stack mt="10" spacing="3">
                <Heading >{producto.nombre} </Heading>
              </Stack>
              <Stack mt="10" spacing="3">
                <Heading>$ {producto.precio} </Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="3">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  textAlign="center"
                  heigth="200px"
                >
                  <Link to={`/item/${producto.id}`}>Detalle</Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Flex>
      </div>
    </>
  );
};

export default Item;
