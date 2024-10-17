import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const CreateUserPage = () => {
  return (
    <Box w={'100%'} h={'100%'}>
      <VStack h={'100%'} w={'100%'}>
        <Box
          h={'15%'}
          w={'100%'}
          borderBottom={'1px solid #0E0603'}
          display={'flex'}
          alignItems={'center'}
          pl={8}
        >
          <Text
            fontSize={'24px'}
            fontWeight={'700'}
            color={'#000'}
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            Create User
          </Text>
        </Box>
        <Box h={'80%'} w={'100%'} p={4}>
          <HStack h={'100%'} w={'100%'}>
            <Box w={'10%'} h={'100%'}>
              <Text
                color={'#000'}
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize={'16px'}
                fontWeight={'700'}
              >
                {' '}
                User Details
              </Text>
            </Box>
            <Box w={'90%'} h={'100%'}>
              <VStack h={'100%'} w={'100%'}>
                <Box w={'100%'} h={'25%'} pl={9} position={'relative'}>
                  <Image
                    src={'/UserManagement/avatarProfile.png'}
                    alt={'user icon'}
                    h={{ base: '60px', '2xl': '120px' }}
                    w={{ base: '60px', '2xl': '120px' }}
                    position={'relative'}
                  />
                  <Image
                    src={'/UserManagement/cameraIcon.svg'}
                    alt={'user icon'}
                    h={{ base: '15px', '2xl': '30px' }}
                    w={{ base: '15px', '2xl': '30px' }}
                    position={'absolute'}
                    // top={'50%'}
                    bottom={{ base: '18.9', '2xl': '7' }}
                    left={{ base: '8%', '2xl': '8.5%' }}
                    // transform={'translate(-50%, -50%)'}
                  />
                  <Text
                    fontSize={'14px'}
                    fontWeight={'40'}
                    pl={{ base: 0, '2xl': 3 }}
                    mt={{ base: 0, '2xl': 2 }}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    Upload Picture
                  </Text>
                </Box>
                <Box
                  w={'100%'}
                  h={'60%'}
                  // border={'1px solid blue'}
                  display={'flex'}
                  // justifyContent={'center'}
                  pl={{ base: 0, '2xl': 9 }}
                  // alignItems={'center'}
                >
                  <Stack mt={5} w="50%" spacing={3}>
                    <Input
                      w="70%"
                      h="50px"
                      variant="outline"
                      borderColor="#949494"
                      placeholder="Full Name"
                      name="name"
                      type="text"
                      label="Full Name"
                    />
                    <Input
                      w="70%"
                      h="50px"
                      borderColor="#949494"
                      variant="outline"
                      placeholder="Email"
                      type="email"
                      name="email"
                      aria-label="Email"
                    />
                    <Input
                      w="70%"
                      h="50px"
                      variant="outline"
                      borderColor="#949494"
                      name="phone"
                      type="number"
                      placeholder="Enter Phone Number"
                      label="Contact No."
                    />
                    {/* <Input
                      w="70%"
                      h="50px"
                      borderColor="#949494"
                      variant="outline"
                      placeholder="password"
                      aria-label="password"
                    /> */}
                    <Select
                      placeholder="Select Role"
                      w="70%"
                      h="50px"
                      borderColor={'#949494'}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Stack>
                </Box>
                <Box w={'100%'} h={'20%'}>
                  <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'flex-end'}
                    gap={3}
                    mt={5}
                    pr={9}
                  >
                    <Button
                      size={'lg'}
                      w={'180px'}
                      bg={'#0087CB'}
                      color={'#FFF'}
                      variant={'solid'}
                    >
                      {' '}
                      Save
                    </Button>
                    <Button size={'lg'} w={'180px'} variant={'outline'}>
                      {' '}
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default CreateUserPage;
