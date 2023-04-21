import React from 'react';
import { Image, Link, Text, Box } from '@chakra-ui/react';
import LogoImg from '../../assets/image/Mason_logo.png';


const Logo = () => {
  return (
    <Link href='#' _hover={{ textDecor: 'none' }}>
      <Box
        display='inline-flex'
        fontWeight={'bold'}
        fontSize='xl'
        alignItems='center'
      >
        <Image
          boxSize={10}
          src={LogoImg}
          alt='My Logo'
        />
        <Text ml={1}>Mason Nguyen</Text>
      </Box>
    </Link>
  );
};

export default Logo;