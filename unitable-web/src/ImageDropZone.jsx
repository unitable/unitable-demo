import React, { useState, useRef } from "react";
import "./ImageDropZone.css";
import { useEffect } from "react";
import { Button, useToast } from "@chakra-ui/react";

const ImageDropZone = ({ selectedExample, onSelectExample, onSubmit }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (selectedExample) {
      onSelectExample(selectedExample);
    }
  }, [selectedExample]);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      var submitResult = await onSubmit();
      console.log(submitResult);
      if (submitResult) {
        toast({
          title: "Table Conversion Completed!",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error occurred.",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const file = e.dataTransfer.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          onSelectExample(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Invalid file type. Please submit an image!",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          onSelectExample(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Invalid file type. Please submit an image!",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        className={`drop-zone ${isDraggingOver ? "drag-over" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
      >
        Drop Image Here or Click to Select File
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
          ref={inputRef}
        />
        {selectedExample && (
          <img src={selectedExample} alt="Dropped" className="dropped-image" />
        )}
      </div>
      <Button
        size="sm"
        bgGradient="linear(to-r, #FEB800 ,#20D912, #1B93FC)"
        m={2}
        onClick={handleClick}
        isLoading={isLoading}
      >
        Submit
      </Button>
    </div>
  );
};

export default ImageDropZone;
