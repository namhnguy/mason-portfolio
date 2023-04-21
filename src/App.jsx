import { Box, useColorModeValue } from "@chakra-ui/react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";

import "./App.css";

function App() {
  return (
    <div>
      <Box
        minH={"100vh"}
        backgroundColor={useColorModeValue("#f0e7db", "#20202380")}
      >
        <Nav />
        <Hero />
      </Box>
    </div>
  );
}

export default App;
