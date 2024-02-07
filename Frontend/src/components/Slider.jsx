import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

function Slider() {
  const images = [
    "https://188brookhaven.com/wp-content/uploads/2019/11/pasted-image-0-1.png",
    "https://i.pinimg.com/736x/4a/76/0c/4a760c9f098e6ffbc502f32d34c0f20b.jpg",
    "https://media.istockphoto.com/id/1136205407/photo/young-stylish-barber-with-mustache-and-tattoos-giving-man-haircut.jpg?s=612x612&w=0&k=20&c=OXArGvJHu8dYhT16vt6mhYR-22ABdd73MGPNFe8l9rA=",
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Box
      w={"90%"}
      h={"400px"}
      margin={"20px auto"}
      position="relative"
      overflow="hidden"
      borderRadius={"20px"}
    >
      <Box
        w={`${images.length * 100}%`}
        h="100%"
        display="flex"
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentImgIndex * (100 / images.length)}%)`}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index}`}
            w={`${100 / images.length}%`}
            h="100%"
            objectFit="cover"
          />
        ))}
      </Box>
    </Box>
  );
}

export default Slider;
