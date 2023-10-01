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
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p="4" bg="green.400">
          <Link to={"/"}>
            <Flex>
              <h2 style={{ marginRight: "30px" }}>Bosque urbano</h2>
              <img src={logo} className="logo" alt="Bosque urbano" width={40} />
            </Flex>
          </Link>
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          <Menu>
            <MenuButton>Categorias</MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={`/categoria/${"A"}`}>Categoria A</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/categoria/${"B"}`}>Categoria B</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/categoria/${"C"}`}>Categoria C</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
