import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";

const Item = ({ productos }) => {
  return (
    <>
      <div className="Imagenes">
        <Card maxW="sm">
          <CardBody>
            <Image
              src={p.imagen} 
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{p.nombre} </Heading>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Detalle
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Item;
