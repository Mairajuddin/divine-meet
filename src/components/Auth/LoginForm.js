import {
  Box,
  Text,
  Image,
  Heading,
  Stack,
  Input,
  Checkbox,
  Link,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      bg="rgba(255, 255, 255, 0.20)"
      backdropFilter="blur(8.4px)"
    >
      <Box
        w="40%"
        h="100%"
        // border="1px solid #000"
        position="relative"
        bg="linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #371E11 100%)"
      >
        <Image
          src="./loginLeftImg.png" // Replace with your image path
          alt="Your Image"
          w="100%"
          h="100%"
          objectFit="cover"
          position="absolute"
          top="0"
          left="0"
          zIndex="-1"
        />
        <Box
          // bg="rgba(255, 255, 255, 0.2)"
          position="relative"
          // top="0"
          // left="0"
          w="100%"
          h="100%"
          zIndex="0"
          bg="rgba(255, 255, 255, 0.2)"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          zIndex="0"
        />
        <Box zIndex="1" color="#FFF" position="absolute" bottom="26" left="10%">
          <Heading fontSize={'42px'}>Empower the</Heading>
          <Heading fontSize={'42px'}>Muslim Collective</Heading>
          <Text fontSize={'15px'}>
            The believer is like a brick for another believer,
            <br /> one supporting the other.
          </Text>
        </Box>
      </Box>
      <Box
        w="60%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        // border="1px solid red"
        // bg="#FFF"
 
        bg="linear-gradient(34deg, rgba(243,237,206,1) 2%, rgba(255,255,255,1) 53%, rgba(218,190,106,1) 100%)"
      >
        <Box
          w="80%"
          h="90%"
          display="flex"
          flexDirection={'column'}
          gap={4}
          justifyContent="center"
          alignItems="center"
          borderRadius="30px"
          boxShadow={'2xl'}
        >
          <Image src="./sideNavImages/Union.png" />
        <Text fontSize="25px" fontWeight="700" color="#0E0603">
          DIVINE.MEET
        </Text>
          {/* <Image src="./Group 3.svg" alt="logo" /> */}
          <Text
            mt={4}
            fontSize={'26px'}
            color="#212121"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            lineHeight="48px"
            // letterSpacing="6px"
          >
            {' '}
            Login to Admin
          </Text>
          <Stack mt={5} w="50%" spacing={3}>
            <Input
              w="100%"
              h="50px"
              variant="outline"
              borderColor="#1E1E1E"
              placeholder="email"
              label="email"
            />
            <Input
              w="100%"
              h="50px"
              borderColor="#1E1E1E"
              variant="outline"
              placeholder="password"
              aria-label="password"
            />
            <Box
              w="100%"
              h="50px"
              display="flex"
              justifyContent="space-between"
            >
              <Checkbox colorScheme="#000">Remember me</Checkbox>
              <Link as={ReactLink} to="/forget-password" mt={2}>
                {' '}
                Forgot password?
              </Link>
            </Box>
            <Button
              bg="#BF9033"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              variant="solid"
              boxShadow=" 0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)"
              color="#FFF"
              _hover={{ bg: '#0074A5' }}
              onClick={() => navigate('/')}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
