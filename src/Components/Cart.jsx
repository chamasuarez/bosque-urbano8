import React from "react";
import Form from "./Form";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div
      className="margin-top-70"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        size: "xl",
      }}
    >
      {" "}
      <Button color="green">
        <Link to={`/`}>Mi carrito</Link>
      </Button>
      {cart.length > 0 ? (
        <Form />
      ) : (
        <Button color="green">
          <Link to={`/`}>Regresar a la tienda</Link>
        </Button>
      )}
    </div>
  );
};

export default Cart;
