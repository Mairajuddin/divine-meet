import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const UserManagement = () => {
  return (
    <Box w={'100%'} h={'100%'}>
      <VStack h={'100%'} w={'100%'} overflowY={'auto'}>
        <Box
          h={'50%'}
          w={'100%'}
          bgImage={'url(./UserManagement/profileCoverImage.png)'}
          bgSize={'cover'}
          bgPosition={'center'}
          bgRepeat={'no-repeat'}
          border={'1px solid green'}
          borderTopLeftRadius={'40px'}
          borderTopRightRadius={'40px'}
          position={'relative'}
        >
          <Box
            h={{ base: '80px', '2xl': '130px' }}
            w={{ base: '80px', '2xl': '130px' }}
            borderRadius={'50%'}
            position={'absolute'}
            top={'65%'}
            left={'6%'}
          >
            <Image
              src={'./UserManagement/avatarProfilePage.png'}
              //   h={'130px'}
              //   w={'130px'}
              alt={'user icon'}
            />
            <Box
              h={{ base: '20px', '2xl': '30px' }}
              w={{ base: '20px', '2xl': '30px' }}
              bg={'#BF9033'}
              borderRadius={'50%'}
              position={'absolute'}
              border={'2px solid #FFF'}
              bottom={{ base: '1.9', '2xl': '3' }}
              left={{ base: '75%', '2xl': '70%' }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Image
                h={{ base: '10px', '2xl': '15px' }}
                w={{ base: '10px', '2xl': '15px' }}
                src={'/UserManagement/EditPencil.png'}
                alt={'user icon'}

                // transform={'translate(-50%, -50%)'}
              />
            </Box>
          </Box>
        </Box>
        <Box h={'100%'} w={'100%'}>
          <Box
            h={'100%'}
            w={'100%'}
            pt={{ base: '40px', '2xl': '60px' }}
            pl={{ base: '90px', '2xl': '130px' }}
            pr={{ base: '90px', '2xl': '130px' }}
          >
            <HStack w={'100%'} mt={5} spacing={10}>
              {' '}
              <VStack spacing={5} w="100%">
                {' '}
                <Input
                  w="100%"
                  h="50px"
                  variant="outline"
                  borderColor="#949494"
                  placeholder="Full Name"
                  name="name"
                  type="text"
                  label="Full Name"
                />
                <Input
                  w="100%"
                  h="50px"
                  borderColor="#949494"
                  variant="outline"
                  placeholder="Email"
                  type="email"
                  name="email"
                  aria-label="Email"
                />
              </VStack>
              <VStack spacing={5} w="100%">
                {' '}
                <Input
                  w="100%"
                  h="50px"
                  variant="outline"
                  borderColor="#949494"
                  name="phone"
                  type="number"
                  placeholder="Enter Phone Number"
                  label="Contact No."
                />
                <Select
                  placeholder="Select Role"
                  w="100%"
                  h="50px"
                  borderColor={'#949494'}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </VStack>
            </HStack>
          </Box>
        </Box>
        <Box
          h={'30%'}
          w={'100%'}
          //   border={'1px solid red'}
          display={'flex'}
          justifyContent={'flex-end'}
          pr={{ base: '90px', '2xl': '130px' }}
          //   alignItems={'center'}
        >
          <Button size={'lg'} w={'180px'} bg={'#BF9033'} color={'#FFF'}>
            Remove
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default UserManagement;
