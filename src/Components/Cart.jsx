import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, clear, total, deleteItem, cartQuantity } =
    useContext(CartContext);

  if (total() === 0) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-12 text-center">
            <div className="alert alert-danger" role="alert">
              No se encontraron Productos en el Carrito!
            </div>
            <Link to={"/"} className="btn btn-warning">
              Regresar a la tienda
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
                    Vaciar Carrito
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
                    <img src={producto.imagen} alt={producto.nombre} width={80} />
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
                      <img
                        src={"/images/icons8-trash-can.svg"}
                        alt={"Eliminar Producto"}
                        width={32}
                      />
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
                    Finalizar Compra
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

//   return (
//     <div
//       className="margin-top-70"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         size: "xl",
//       }}
//     >(
//       <Button color="green">
//         <Link to={`/`}>Regresar a la tienda</Link>
//       </Button>
//     ):
//     <Button color="green">
//         <Link onclick={clear} to={`/`}>Regresar </Link>
//       </Button>
//     )

//     return ()
//       {" "}
//       <Button color="green">
//         <Link to={`/`}>Mi carrito</Link>
//       </Button>
//       {cart.length > 0 ? (
//         <Form />
//       ) : (
//         <Button color="green">
//           <Link to={`/`}>Regresar a la tienda</Link>
//         </Button>
//       )}
//     </div>
//   );
// };

export default Cart;
