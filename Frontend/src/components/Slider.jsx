import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

function Slider() {
  const images = [
    "https://188brookhaven.com/wp-content/uploads/2019/11/pasted-image-0-1.png",
    "https://i.pinimg.com/736x/4a/76/0c/4a760c9f098e6ffbc502f32d34c0f20b.jpg",
    "https://media.istockphoto.com/id/1136205407/photo/young-stylish-barber-with-mustache-and-tattoos-giving-man-haircut.jpg?s=612x612&w=0&k=20&c=OXArGvJHu8dYhT16vt6mhYR-22ABdd73MGPNFe8l9rA=",
    "https://t3.ftcdn.net/jpg/06/31/29/86/240_F_631298698_0K9ydGoiZLuRh9pTPsuGh6cnFNgN5TjF.jpg",
    "https://t3.ftcdn.net/jpg/06/59/64/56/240_F_659645668_t3j2u6tjRdY4bTKlm0MvfYv7d0Gc2jAv.jpg",
    "https://t4.ftcdn.net/jpg/06/31/56/21/240_F_631562114_6rMzWogQL2NzKFhGqsLK7g3xg9gErf73.jpg",
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
