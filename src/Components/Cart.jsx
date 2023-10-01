import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Button, Divider, Spacer } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Cart = () => {
  const { cart, clear, total, deleteItem, cartQuantity } =
    useContext(CartContext);

  if (total() === 0) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-12 text-center">
            <div className="alert alert-danger" role="alert">
              <Button textAlign="center" p="4" bg="orange" display="flex">
                No se encontraron Productos en el Carrito!
              </Button>
              <Divider />
            </div>
            <Link to={"/"} className="btn btn-warning">
              <Button
                textAlign="center"
                p="4"
                bg="orange"
                width="60"
                display="flex"
              >
                Regresar a la tienda
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <TableContainer>
      <Table variant="simple"  size='md' width={300}>
        <TableCaption>
          <Link
            onClick={clear}
            className="btn btn-warning"
            title={"Vaciar Carrito"}
          >
            <Button textAlign="center" p="4" bg="orange">
              Vaciar Carrito{" "}
            </Button>
          </Link>
          <Divider/>
          <Link
            onClick={() => {
              deleteItem(producto.id);
            }}
            title={"Eliminar Producto"}
          >
            <span textAlign="center" className="material-symbols-outlined">
              delete
            </span>
            <Spacer />
            <Button textAlign="center" p="4" bg="orange">
              <p>{"Eliminar Producto"}</p>
            </Button>
          </Link>
          <Divider/>
          <Link to={"/checkout"} className="btn btn-warning">
            <Button textAlign="center" p="4" bg="orange">
              Finalizar Compra
            </Button>
          </Link>{" "}
        </TableCaption>
        <Thead> 
          <Tr>
            <Th>Producto</Th>
            <Th>Cantidad</Th>
            <Th isNumeric>Precio</Th>
            <Th isNumeric>Total a pagar</Th>
          </Tr>
        </Thead>
        <Tbody >
          {cart.map((producto) => (
            <tr key={producto.id}>
              <td className="align-middle">{producto.nombre}</td>
              <td className="align-middle text-end">{producto.quantity}</td>
              <td className="align-middle text-end">$ {producto.precio}</td>
              <td className="align-middle text-end">
              $ {producto.quantity * producto.precio}
              </td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};


export default Cart;
