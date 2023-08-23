import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p="4" bg="green.400">
          <h2>Bosque urbano</h2>
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          <Menu>
            <MenuButton>Categorias</MenuButton>
            <MenuList>
              <MenuItem>Categoria 1</MenuItem>
              <MenuItem>Categoria 2</MenuItem>
              <MenuItem>Categoria 3</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4" bg="green.400" >
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
