import { Divider, Flex, Box, Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../assets/CartProvider";

const context = useContext (CartContext)

const CartWidget = () => {
  return (
    <div>
      <Flex>
        <Box>
          <Badge badgeContext = { context.calcItemsQuantity ()} color= "primary"> 
           <span className="material-symbols-outlined">shopping_cart</span>
          </Badge>
        </Box>
        <Divider />
      <Box>
        <p>{contador}</p>
      </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
