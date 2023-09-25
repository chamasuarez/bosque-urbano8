import React from "react";
import Form from "./Form";
import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import { CartContext } from "./CartProvider";

const Cart = () => {
  
const {cart} = useContext (CartContext)

  return (
    <div>
      {" "}
      Mi carrito
      {cart.length > 0 ? (
        <Form />
      ) : (
        <Button color="green">
         <Link to = {`/`}> 
          Regresar a la tienda
          </Link>
          </Button>
      )}
    </div>
  );
};

export default Cart;
