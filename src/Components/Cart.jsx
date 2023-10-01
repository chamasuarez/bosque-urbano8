import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Button, Divider, Spacer } from "@chakra-ui/react";

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
              <Button textAlign="center" p="4" bg="orange" width="60" display="flex" >
                Regresar a la tienda
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" colSpan={5} className="text-end">
                  <Link
                    onClick={clear}
                    className="btn btn-warning"
                    title={"Vaciar Carrito"}
                  >
                    <Button textAlign="center" p="4" bg="orange">
                      Vaciar Carrito
                    </Button>
                  </Link>
                </th>
              </tr>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Producto</th>
                <th scope="col" className="text-end">
                  Cantidad
                </th>
                <th scope="col" className="text-end">
                  Precio 
                </th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((producto) => (
                <tr key={producto.id}>
                  <td>
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      width={600}
                    />
                  </td>
                  <td className="align-middle">{producto.nombre}</td>
                  <td className="align-middle text-end">{producto.quantity}</td>
                  <td className="align-middle text-end">
                    $: {producto.quantity * producto.precio}
                  </td>
                  <td className="align-middle text-end">
                    <Link
                      onClick={() => {
                        deleteItem(producto.id);
                      }}
                      title={"Eliminar Producto"}
                    >
                      <span textAlign="center" className="material-symbols-outlined">delete</span>
                      <Spacer />
                      <Button textAlign="center" p="4" bg="orange" >
                      <p>{"Eliminar Producto"}</p>
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td className="text-end">
                  <b>Total a Pagar</b>
                </td>
                <td className="text-end">
                  <b>$: {cartQuantity}</b>
                </td>
                <td className="text-end">
                  <Link to={"/checkout"} className="btn btn-warning">
                  <Button textAlign="center" p="4" bg="orange">
                    Finalizar Compra
                  </Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
