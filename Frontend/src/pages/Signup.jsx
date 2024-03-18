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
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom"

function Signup() {
  // logics for chakra ui
   const [isLoading, setIsLoading] = useState(false);
   const toast = useToast();
  //logics for chakra ui ends
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  }); 
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
    if(!formData.name||!formData.email||!formData.password){
      toast({
        title: "Required",
        description: "Please fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return
    }
     setIsLoading(true);
    axios.post("http://localhost:8080/users/register",formData,{
      headers:{
        "Content-type":"application/json"
      }
    })
    .then((res)=>{
      console.log(res.data)
      setIsLoading(false)
      toast({
        title: "Account created.",
        description: "We've created your account for you." ,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/")
    })
    .catch((error)=>{
      console.log(error)
      setIsLoading(false);
      toast({
        title: "Error",
        description: error.response.data.msg,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    })
  }
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
              <Input
                placeholder="Enter Your Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </Box>
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
                onChange={handleChange}
                name="password"
              />
            </Box>
            <Box>
              <Button w={"100%"} onClick={handleSubmit} isLoading={isLoading} >Signup</Button>
              <Text mt={"5px"} textAlign={"center"}>
                Already Have an acccount?{" "}
                <Link to="/login" color={"blue"}>
                  Login
                </Link>
              </Text>
            </Box>
        </Flex>
      </Container>
    </HStack>
  );
}

export default Signup;
