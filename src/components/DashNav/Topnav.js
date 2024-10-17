import React from 'react';
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon, PhoneIcon } from '@chakra-ui/icons';

const Topnav = () => {
  return (
    <Box
      w="calc(100% )"
      display={'flex'}
      h="100px"
      p={4}
      // border={'2px solid purple'}
      justifyContent={'space-between'}
    >
      <Box
        w={'40%'}
        display={'flex'}
        h={'100%'}
        px={4}
        // justifyContent={'center'}
        alignItems={'center'}
        // border={'1px solid red'}
      >
        <InputGroup width="60%">
          <InputLeftElement height={'50px'} width={'50px'} pointerEvents="none">
            <Image
              src="./NavbarImages/search.svg"
              alt="search icon"
              mt={1}
              // ml={2}

              pl={3}
              h="40px"
              w="40px"
            />
          </InputLeftElement>
          <Input
            type="tel"
            background={'white'}
            borderRadius={10}
            placeholder="Search"
            h="50px"
            ml={2}
          />
        </InputGroup>
      </Box>
      <Box
        w={'50%'}
        // border={'1px solid green'}
        display={'flex'}
        justifyContent={'right'}
        alignItems={'center'}
        // px={1}
      >
        <Box
          w={'20%'}
          h={'100%'}
          display={'flex'}
          gap={5}
          alignItems={'center'}
        >
          <Box
            p={3}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            bg={'#E8D8A0'}
            h={'48px'}
            w={'48px'}
            borderRadius={'10px'}
          >
            <Image
              src="./NavbarImages/messageIcon2.png"
              h={'30px'}
              w={'30px'}
            />
          </Box>

          <Box
            p={2}
            bg={'#E8D8A0'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            h={'48px'}
            w={'48px'}
            borderRadius={'10px'}
          >
            <Image src="./NavbarImages/bellIcon2.png" h={'30px'} w={'30px'} />
          </Box>
        </Box>
        <Box
          w={'40%'}
          h={'100%'}
          display={'flex'}
          alignItems={'center'}
          gap={5}
          // border={'1px solid red'}
        >
          <Box w={{ base: '40%', xl: '60%' }} h={'100%'}>
            <Menu>
              <MenuButton
                as={Button}
                size={'lg'}
                w={'100%'}
                _hover={{
                  bg: 'none',
                }}
                h={'100%'}
                bg={'none'}
                rightIcon={<ChevronDownIcon />}
              >
                Actions
              </MenuButton>
              <MenuList pos="relative">
                <Box
                  pos="absolute"
                  top="-10px"
                  right="10px"
                  w="0"
                  h="0"
                  borderLeft="10px solid transparent"
                  borderRight="10px solid transparent"
                  borderBottom="10px solid white"
                />
                <VStack w={'100%'} spacing={4} p={2}>
                  <Image
                    src="./NavbarImages/Avatar.png"
                    borderRadius={'50%'}
                    h={'58px'}
                    w={'58px'}
                    alt="Custom Image"
                  />
                  <Box
                    w={'100%'}
                    display={'flex'}
                    gap={0}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      fontStyle={'normal'}
                      color="#371E11"
                      letterSpacing={'0.02em'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      Qazi Mairaj
                    </Text>
                    <Text
                      fontSize="12px"
                      fontWeight="400"
                      fontStyle={'normal'}
                      color="#988F8F"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      lineHeight={'16px'}
                      letterSpacing={'0.05em'}
                    >
                      Administrator
                    </Text>
                    <Box
                      display={'flex'}
                      gap={2}
                      justifyContent={'center'}
                      alignItems={'center'}
                      flexDirection={'column'}
                      mt={7}
                      w={'100%'}
                    >
                      <Button
                        // colorScheme="blue"
                        display={'flex'}
                        width={'80%'}
                        gap={2}
                        // justifyContent={'space-evenly'}
                        bg={'#F3EDCE'}
                      >
                        <Image
                          src="./NavbarImages/settingIcon.svg"
                          // h={'30px'}
                          // w={'30px'}
                        />
                        <Text
                          fontSize={'16px'}
                          fontWeight={'400'}
                          color={'#A4722A'}
                          fontFamily={'Plus Jakarta Sans, sans-serif'}
                          lineHeight={'16px'}
                          fontStyle={'normal'}
                          letterSpacing={'0.05em'}
                        >
                          Setting
                        </Text>
                      </Button>
                      <Button
                        bg={'#BF9033'}
                        width={'80%'}
                        fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#FFF'}
                        fontFamily={'Plus Jakarta Sans, sans-serif'}
                        lineHeight={'16px'}
                        fontStyle={'normal'}
                        letterSpacing={'0.05em'}
                      >
                        Logout
                      </Button>
                    </Box>
                  </Box>
                </VStack>
              </MenuList>
            </Menu>
          </Box>
          <Box w={'40%'}>
            <Image src="./NavbarImages/Avatar.png" h={'48px'} w={'48px'} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topnav;
