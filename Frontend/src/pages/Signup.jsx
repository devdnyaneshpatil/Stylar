import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Signup() {
  return (
    <HStack bg={"black"} width={"100%"} height={"100vh"}>
      <Box width={"65%"} height={"100vh"}>
        <Image
          w={"100%"}
          h={"100%"}
          src="https://manforhimself.com/wp-content/uploads/2021/02/zayn-malik-cropped-short-blue-dyed-hair-man-for-himself-1200.jpg"
        />
      </Box>
      <Container color={"whitesmoke"}>
        <Flex flexDirection={"column"} rowGap={"30px"}>
          <Heading>STYLAR</Heading>
          <Heading>YOUR PROSTYLAR FOR GOOD JOURNEY</Heading>
          <Box>
            <FormLabel color={"gray"}>Name</FormLabel>
            <Input placeholder="Enter Your Name" type="text" />
          </Box>
          <Box>
            <FormLabel color={"gray"}>Email</FormLabel>
            <Input placeholder="Enter Your Email" type="email" />
          </Box>
          <Box>
            <FormLabel color={"gray"}>Password</FormLabel>
            <Input placeholder="Enter Your Password" type="password" />
          </Box>
          <Box>
            <Button w={"100%"}>Signup</Button>
            <Text mt={"5px"} textAlign={"center"}>
              Already Have an acccount?{" "}
              <Link color={"blue"}>Login</Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </HStack>
  );
}

export default Signup;
