import { Box, Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box bg="gray.100" p={8}>
      <Flex justify="space-between" align="flex-start" maxW="1200px" mx="auto">
        {/* Useful Links */}
        <Box flex="1" mr={8}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Useful Links
          </Text>
          <UnorderedList>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact</a>
            </ListItem>
          </UnorderedList>
        </Box>
        {/* Connect With Us */}
        <Box flex="1" mr={8}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Connect With Us
          </Text>
          <UnorderedList>
            <ListItem>
              <a href="#">Facebook</a>
            </ListItem>
            <ListItem>
              <a href="#">Twitter</a>
            </ListItem>
            <ListItem>
              <a href="#">Instagram</a>
            </ListItem>
          </UnorderedList>
        </Box>
        {/* Contact Info */}
        <Box flex="1">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Contact Info
          </Text>
          <Text>123 Street Name</Text>
          <Text>City, Country</Text>
          <Text>Email: info@example.com</Text>
          <Text>Phone: +1234567890</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
