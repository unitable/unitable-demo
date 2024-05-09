import React from "react";
import { Box, Flex, Link, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { Text } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";

const SocialMediaFooter = () => {
  return (
    <Box
      bgGradient="linear(to-r, #D29200, #1D8B0A, #1474B3)"
      color="white"
      p={1}
    >
      <Flex justify="center" align="center">
        <Text fontSize="sm">Created by the Polo Club of Data Science</Text>
        <Link href="https://poloclub.github.io/" isExternal>
          <IconButton
            as={IoHomeOutline}
            aria-label="Poloclub Website"
            variant="ghost"
            color="white"
            fontSize="inherit"
            boxSize={5}
            mr={2}
            mb={1}
            _hover={{ bg: "transparent" }}
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default SocialMediaFooter;
