import { Divider, Flex, Box, Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useContext } from "react"

const CartWidget = () => {

const {cartQuantity} = useContext (CartContext)

return (
<div>
<Flex>
<Box>
<Badge badgeQuantity = {cartQuantity ()} color= "primary">
<span className="material-symbols-outlined">shopping_cart</span>
</Badge>
</Box>
<Divider />
<Box>

</Box>
</Flex>
</div>
);
};



export default CartWidget;
