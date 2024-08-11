import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../Store/LoadingReducer/action";

function Signup() {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: "Required",
        description: "Please fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    dispatch(startLoading());

    axios
      .post("http://localhost:8080/api/v1/auth/register", formData, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(stopLoading());
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        //navigate("/");
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoading());
        toast({
          title: "Error",
          description: error.response.data.msg,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const isFormValid = formData.name && formData.email && formData.password;

  const imageDisplay = useBreakpointValue({ base: "none", lg: "block" });
  const containerWidth = useBreakpointValue({ base: "100%", lg: "50%" });

  return (
    <HStack bg={"black"} width={"100%"} height={"100vh"}>
      <Box width={"65%"} height={"100vh"} display={imageDisplay}>
        <Image
          w={"100%"}
          h={"100%"}
          src="https://manforhimself.com/wp-content/uploads/2021/02/zayn-malik-cropped-short-blue-dyed-hair-man-for-himself-1200.jpg"
        />
      </Box>
      <Container
        width={containerWidth}
        color={"whitesmoke"}
        margin={imageDisplay === "none" ? "0 auto" : "0"}
      >
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
              onBlur={handleBlur}
              name="name"
              isInvalid={touched.name && !formData.name}
              errorBorderColor="crimson"
            />
            {touched.name && !formData.name && (
              <Text color="crimson">Name is required</Text>
            )}
          </Box>
          <Box>
            <FormLabel color={"gray"}>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              isInvalid={touched.email && !formData.email}
              errorBorderColor="crimson"
            />
            {touched.email && !formData.email && (
              <Text color="crimson">Email is required</Text>
            )}
          </Box>
          <Box>
            <FormLabel color={"gray"}>Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter Your Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                isInvalid={touched.password && !formData.password}
                errorBorderColor="crimson"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {touched.password && !formData.password && (
              <Text color="crimson">Password is required</Text>
            )}
          </Box>
          <Box>
            <Button
              w={"100%"}
              onClick={handleSubmit}
              isLoading={isLoading}
              isDisabled={!isFormValid}
            >
              Signup
            </Button>
            <Text mt={"5px"} textAlign={"center"}>
              Already Have an account?{" "}
              <Link to="/login">
                <Text as="span" color="blue.500">
                  Login
                </Text>
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </HStack>
  );
}

export default Signup;
