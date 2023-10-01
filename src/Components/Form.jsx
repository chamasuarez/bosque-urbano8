import React, { useState, useContext } from "react";
import { Select, Stack, Spacer, Button } from "@chakra-ui/react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "./CartContext";

const Form = () => {
  const { cart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "") {
      alert("Campo nombre vacío");
    } else {
      alert(`Bienvenido, ${nombre}`);
    }

    if (email === "") {
      alert("Campo email vacío");
    } else {
      alert(`Registrado con el email, ${email}`);
    }

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };
  const order = {
    buyer: { nombre, email },
    items: cart.map(({ id, nombre, precio }) => ({
      id,
      nombre,
      precio,
    })),
  };

  const ordersCollection = collection(db, "orden");

  return (
    <>
    <h1 size= "xl" heigth="400px">FORMULARIO</h1>
    <div className="margin-top-70"
    style={{
      grid:"display-grid",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor:"orange",
      width:"500px",
      size: "xl", 
    }}>
      <Stack spacing={3}>
        <form onSubmit={handleSubmit}>
          <Select placeholder="Nombre" size="md" />
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <Spacer />
          <Select placeholder="Email" size="md" />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer />
          <Button type="submit" color= "green">Enviar</Button>
        </form>
      </Stack>
      </div>
      <Spacer />
      <h3>Id de tu compra: $ {orderId}</h3>

    </>
  );
};

export default Form;

