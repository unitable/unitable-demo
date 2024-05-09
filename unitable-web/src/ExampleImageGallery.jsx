import React, { useRef } from "react";
import { Flex, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { LinearGradient } from "react-text-gradients";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const ExampleImageGallery = ({ images, onSelectExample }) => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft -= 160;
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft += 160;
    }
  };

  return (
    <Box>
      <Text fontSize="lg">
        <LinearGradient gradient={["to right", "#FEB800 ,#20D912, #1B93FC"]}>
          Example Table Images:
        </LinearGradient>
      </Text>
      <Text fontSize="sm">
        Click on an example to use the example as input to MagicTable
      </Text>
      <Box bg="#FAFAFA" borderRadius="lg">
        <Flex
          direction="row"
          alignItems="center"
          justify="center"
          overflow="hidden"
        >
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Scroll Left"
            onClick={scrollLeft}
            size="sm"
            variant="ghost"
          />
          <Flex
            ref={galleryRef}
            flexWrap="nowrap"
            overflowX="auto"
            alignItems="center"
          >
            {images.map((imageLoc, index) => (
              <Image
                key={index}
                src={imageLoc}
                alt={`Image ${index}`}
                boxSize="150px"
                objectFit="contain"
                m={2}
                onClick={() => onSelectExample(imageLoc)}
              />
            ))}
          </Flex>
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Scroll Right"
            onClick={scrollRight}
            size="sm"
            variant="ghost"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default ExampleImageGallery;
