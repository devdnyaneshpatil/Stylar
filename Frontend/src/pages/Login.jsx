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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"

function Login() {
  // logics for chakra ui
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  //logics for chakra ui ends
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      toast({
        title: "Required",
        description: "Please fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    axios
      .post("http://localhost:8080/users/login", formData, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        toast({
          title: "Login ",
          description: "You've logged in successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast({
          title: "Error",
          description: error.response.data.msg,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };
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
            <FormLabel color={"gray"}>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </Box>
          <Box>
            <FormLabel color={"gray"}>Password</FormLabel>
            <Input
              placeholder="Enter Your Password"
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Button w={"100%"} isLoading={isLoading} onClick={handleSubmit} >Login</Button>
            <Text mt={"5px"} textAlign={"center"}>
              Don't Have an acccount?{" "}
              <Link href="/signup" color={"blue"}>
                Create An Account
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </HStack>
  );
}

export default Login;
