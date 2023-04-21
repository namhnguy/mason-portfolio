import React from "react";
import { Stack, Link } from "@chakra-ui/react";

const NavDesktop = () => {
  return (
    <Stack
      direction={"row"}
      display={{ base: "none", md: "flex" }}
      width={{ base: "full", md: "auto" }}
      alignItems="center"
      flexGrow={1}
    >
      <Link p={2} href="#" _hover={{ textDecor: "none" }}>
        Home
      </Link>
      <Link p={2} href="#about-section" _hover={{ textDecor: "none" }}>
        About Me
      </Link>
      <Link p={2} href="#exp-section" _hover={{ textDecor: "none" }}>
        Experience
      </Link>
      <Link p={2} href="#skill-section" _hover={{ textDecor: "none" }}>
        Skills
      </Link>
      <Link href="#project-section" _hover={{ textDecor: "none" }}>
        Projects
      </Link>
    </Stack>
  );
};

export default NavDesktop;
