import { Box, Button, Container, Flex, HStack, Heading, Link } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Container maxW={"100%"}>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        borderBottom={"2px solid black"}
        p={"20px"}
        zIndex={100}
      >
        <HStack>
          <Heading>STYLAR</Heading>
        </HStack>
        <HStack justifyContent={"space-between"} fontSize={"20px"} p={"10px"}>
          <Box
            w={"100px"}
            p={"5px"}
            borderRadius={"5px"}
            transition="background-color 0.3s, color 0.3s"
            _hover={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
            }}
            textAlign={"center"}
          >
            <a href="">Home</a>
          </Box>
          <Box
            w={"100px"}
            p={"5px"}
            borderRadius={"5px"}
            transition="background-color 0.3s, color 0.3s"
            _hover={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
            }}
            textAlign={"center"}
          >
            <a href="">About</a>
          </Box>
          <Box
            w={"100px"}
            p={"5px"}
            borderRadius={"5px"}
            transition="background-color 0.3s, color 0.3s"
            _hover={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
            }}
            textAlign={"center"}
          >
            <a href="">Services</a>
          </Box>
          <Box
            w={"100px"}
            p={"5px"}
            borderRadius={"5px"}
            transition="background-color 0.3s, color 0.3s"
            _hover={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
            }}
            textAlign={"center"}
          >
            <a href="">Blog</a>
          </Box>
          <Box
            w={"100px"}
            p={"5px"}
            borderRadius={"5px"}
            transition="background-color 0.3s, color 0.3s"
            _hover={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
            }}
            textAlign={"center"}
          >
            <a href="">Contact</a>
          </Box>
          <Button colorScheme="cyan">Login</Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
