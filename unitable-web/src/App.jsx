import { useState, useEffect } from "react";
import "./App.css";
import { LinearGradient } from "react-text-gradients";
import {
  Text,
  Box,
  Flex,
  Spacer,
  IconButton,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import ImageDropZone from "./ImageDropZone";
import { SimpleGrid } from "@chakra-ui/react";
import ExampleImageGallery from "./ExampleImageGallery";
import Example1 from "./examples/example1.png";
import Example2 from "./examples/example2.png";
import Example3 from "./examples/example3.png";
import Example4 from "./examples/example4.png";
import Example5 from "./examples/example5.png";
import Example6 from "./examples/example6.png";
import TableVis from "./TableVis";
import { CopyBlock, a11yLight } from "react-code-blocks";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";

function App() {
  const [selectedExample, setSelectedExample] = useState(null);
  const [textContent, setTextContent] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [apiFunc, setApiFunc] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);

  const updateSelectedExample = (selecEx) => {
    setSelectedExample(selecEx);
  };

  const images = [Example1, Example2, Example3, Example4, Example5, Example6];

  const apiUrl = "https://aishwaryac26-unitable-api.hf.space/predict";

  const runUnitableModel = async () => {
    if (!selectedExample) {
      return false;
    }
    try {
      const formData = new FormData();
      var imageSubmit = await fetch(selectedExample);
      imageSubmit = await imageSubmit.blob();
      formData.append("image", imageSubmit);
      const response = await axios.post(apiUrl, formData);
      setTextContent(response.data.prediction);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <>
      <Box mx={3}>
        <Flex alignItems="center">
          <Text fontSize="4xl">
            <LinearGradient
              gradient={["to right", "#FEB800 ,#20D912, #1B93FC"]}
            >
              UniTable
            </LinearGradient>
          </Text>
          <Spacer />
        </Flex>
        <SimpleGrid
          columns={3}
          spacingX="20px"
          spacingY="3px"
          templateColumns="1.6fr 2fr 2fr"
        >
          <ImageDropZone
            selectedExample={selectedExample}
            onSelectExample={updateSelectedExample}
            onSubmit={runUnitableModel}
          />
          <Box overflow="auto">
            <Text fontSize="md" color="#666">
              HTML Code
            </Text>

            <Box height="376px" overflow="auto" border="2px dashed #ccc;">
              <CopyBlock
                text={textContent}
                language="html"
                theme={a11yLight}
                customStyle={{ fontSize: "12px", lineHeight: "1.5" }}
              />
            </Box>
          </Box>
          <Box overflow="auto">
            <Text fontSize="md" color="#666">
              Table Visualization
            </Text>
            <Box height="376px" overflow="auto" border="2px dashed #ccc;">
              <TableVis htmlString={textContent} />
            </Box>
          </Box>
          <ExampleImageGallery
            images={images}
            onSelectExample={updateSelectedExample}
          />
          <Box>
            <Text fontSize="sm">
              <strong>Note:</strong> As the back-end inference API might be on
              sleep, it is possible for your first conversion to take ~5 minutes
              longer, due to the server restart time.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default App;
