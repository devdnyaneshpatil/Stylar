import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Slider3() {
  return (
    <Box width={"90%"} margin={"50px auto"} p={"40px"}>
      <Heading textAlign={"center"} mb={"30px"}>
        Meet StyleSeat Pros
      </Heading>
      <Flex alignItems={"center"} justifyContent={"space-around"}>
        <Box width={"40%"}>
          <Box>
            <video width="100%" height="auto" controls>
              <source
                src="https://d220aniogakg8b.cloudfront.net/marketing/homepage/new/Kamara.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box>
            <Heading fontSize={"20px"}>Manuel, Makeup Artist</Heading>
            <Text>
              Between glam looks and good vibes, it’s no surprise why Manuel’s
              clients keep coming back.
            </Text>
          </Box>
        </Box>
        <Box width={"40%"}>
          <Box>
            <video width="100%" height="auto" controls>
              <source
                src="https://d220aniogakg8b.cloudfront.net/marketing/homepage/new/Manuel.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box>
            <Heading fontSize={"20px"}>Manuel, Makeup Artist</Heading>
            <Text>
              Between glam looks and good vibes, it’s no surprise why Manuel’s
              clients keep coming back.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box m={"50px auto"} width={"90%"} borderRadius={"40px"}>
        <Image
          w={"100%"}
          borderRadius={"40px"}
          src="https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/klarna_learn_more_d.7ea693a14863901ebf9b.png"
        />
      </Box>
    </Box>
  );
}

export default Slider3;
