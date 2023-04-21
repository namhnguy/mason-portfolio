import React from "react";
import { Container, Heading, Box } from "@chakra-ui/react";
import TextScrambler from "react-scramble-text";
import "react-scramble-text/dist/index.css";

function Hero() {
  const phrases = [
    "8c4a2ebdc5b016babf9a89f7d3a7b925084df8f586a141abf490b772c91c3b6cd14c6eefadad3300ce5f4b813e57393cebf34540660ab79654ace35e1d6c48a7",
    "Hello, welcome to my webpage",
  ];
  return (
    <Container
      maxW={[
        "container.sm",
        "container.md",
        "container.lg",
        "container.lg",
        "container.lg",
      ]}
    >
      <Box paddingTop={"15rem"} textAlign="center">
        <Heading>
          <TextScrambler phrases={phrases} speed={10} pauseTime={1000} repetitions={1} />
        </Heading>
      </Box>
    </Container>
  );
}

export default Hero;
