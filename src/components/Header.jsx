import React from 'react'
import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Header = () => {
  return <HStack bgColor={"blackAlpha.900"} shadow={"base"} p={"4"}>
    <Button variant={"unstyled"} color={"white"}>
      <Link to="/">Home</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
      <Link to="/exchanges">Exchanges</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
      <Link to="/coins">Coins</Link>
    </Button>
  </HStack>
}

export default Header;




