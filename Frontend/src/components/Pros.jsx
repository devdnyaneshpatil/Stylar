import { Box, Container, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Pros() {
  return (
    <Container
      maxW={"100%"}
      borderRadius={"10px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
      p={"50px"}
    >
      <Heading textAlign={"center"} m={"30px 0px"}>
        Find Pros By Service
      </Heading>
      <SimpleGrid spacing="30px" columns={6}>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/braids_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Braids</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/natural_hair_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Natural Hair</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/haircut_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Haircut</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/mens_haircut_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Men's Haircut</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/locs_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Locs</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/silk_press_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Silk Press</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/weaves_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Weaves</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/eyelashes_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Eyelashes</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/nails_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Nails</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/color_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Color</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/kids_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Kids</Text>
          </VStack>
        </Box>
        <Box bg="tomato" height="200px">
          <VStack>
            <Image
              src="https://www.styleseat.com/bundles/static/assets/home/landing_page/makeup_tile.jpg"
              width={"100%"}
            />
            <Text color={"black"}>Makeup</Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default Pros;
