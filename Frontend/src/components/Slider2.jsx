import { Box, Button, Flex, HStack, Heading ,Image,Text, VStack} from "@chakra-ui/react";
import React from "react";

function Slider2() {
  return (
    <Box
      maxW={"100%"}
      mt={"50px"}
      bg="linear-gradient(to right, #f0f0f0, #dddddd, #ffffff)"
    >
      <HStack>
        <HStack>
          <Image src="https://www.styleseat.com/bundles/static/assets/home/landing_page/manny.png" />
        </HStack>
        <VStack flex={1} h={"300px"} p={"10px"}>
          <VStack>
            <Heading>Set up your business on StyleSeat</Heading>
            <Text>
              Join the largest network of clients searching for top
              professionals.
            </Text>
          </VStack>
          <HStack>
            <Flex gap={"20px"} mt={"100px"}>
              <Box
                w={"350px"}
                p={"5px"}
                bg={"whitesmoke"}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
              >
                <Heading fontSize={"16px"}>Grow your business</Heading>
                <Text>
                  Unlock business growth by using our marketing tools to attract
                  new clients.
                </Text>
                <Button colorScheme="twitter" size="xs">
                  Learn More
                </Button>
              </Box>
              <Box
                w={"350px"}
                p={"5px"}
                bg={"whitesmoke"}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
              >
                <Heading fontSize={"16px"}>Grow your business</Heading>
                <Text>
                  Unlock business growth by using our marketing tools to attract
                  new clients.
                </Text>
                <Button colorScheme="twitter" size="xs">
                  Learn More
                </Button>
              </Box>
              <Box
                w={"350px"}
                p={"5px"}
                bg={"whitesmoke"}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
              >
                <Heading fontSize={"16px"}>Grow your business</Heading>
                <Text>
                  Unlock business growth by using our marketing tools to attract
                  new clients.
                </Text>
                <Button colorScheme="twitter" size="xs">
                  Learn More
                </Button>
              </Box>
            </Flex>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Slider2;
