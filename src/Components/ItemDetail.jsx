import React from "react";

const ItemDetail = () => {
  return (
    <>
      <div className="Detalle">
        <Card maxW="sm">
          <CardBody>
            <Image
              src="c:\Users\ASUS\Documents\Fotos varias\img 12.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Banqueta</Heading>
              <Text>
                La medida es de 2m x 35 x 45 de alto. Se puede hacer las medidas
                a necesidad del cliente
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $95000
              </Text>
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
        <Card maxW="sm">
          <CardBody>
            <Image
              src="c:\Users\ASUS\Documents\IMG_E4064.JPG"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Mesa</Heading>
              <Text>
                Mesa de 2,45 m x 1,5 x 75 de alto. Se puede hacer las medidas a
                necesidad del cliente
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $85000
              </Text>
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
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Sillon</Heading>
              <Text>
                Sillon ancho con apoya brazos para el exterior.Se puede hacer
                las medidas a necesidad del cliente
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $75000
              </Text>
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
        <Card maxW="sm">
          <CardBody>
            <Image
              src="c:\Users\ASUS\Documents\Fotos varias\img 6.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Casita infantil</Heading>
              <Text>
                Juego CASITA infantil ideal para patios. Se hacen a medida del
                cliente y colores a gusto.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $70000
              </Text>
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
        <Card maxW="sm">
          <CardBody>
            <Image
              src="c:\Users\ASUS\Documents\IMG_E4127.JPG"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Reposera</Heading>
              <Text>Reposera 2m x 64 x 30 de alto. Colores varios</Text>
              <Text color="blue.600" fontSize="2xl">
                $60000
              </Text>
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

export default ItemDetail;
