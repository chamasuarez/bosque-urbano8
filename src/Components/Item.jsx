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
      <div className="Imagenes">
        <Flex>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={producto.imagen}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{producto.nombre} </Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/ ${producto.id}`}>Detalle</Link>
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
