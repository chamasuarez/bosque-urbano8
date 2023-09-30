import { Divider, Flex, Box, Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div>
      <Flex>
        <Box>
          <Badge badgeQuantity={cartQuantity()} color="primary">
          <Link to= {"/cart"}><span className="material-symbols-outlined">shopping_cart</span></Link>
          </Badge>
        </Box>
        <Divider />
        <Box></Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
