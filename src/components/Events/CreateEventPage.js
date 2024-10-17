import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const CreateEventPage = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Box w={'100%'} h={'100%'}>
      <VStack
        h={'100%'}
        w={'100%'}
        overflowY={'scroll'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        <Box
          h={'10%'}
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
        <Box h={'85%'} w={'100%'} p={2}>
          <HStack h={'100%'} w={'100%'}>
            <Box
              h={'100%'}
              w={'30%'}
              display={'flex'}
              justifyContent={'space-around'}
            >
              <Text
                fontSize={'16px'}
                color="#000"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight={'700'}
                fontStyle={'normal'}
              >
                {' '}
                Event Details
              </Text>
              <Box
                mt={3}
                ml={{ base: '10px', '2xl': '50px' }}
                position="relative"
                w={{ base: '170px', '2xl': '201px' }}
                h={{ base: '170px', '2xl': '201px' }}
                bg={'#D9D9D9'}
                borderRadius={'10px'}
                boxShadow={'1px 1px 1px gray'}
              >
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt="Uploaded Image"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                ) : (
                  <Box
                    as="label"
                    htmlFor="image-upload"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                    h="100%"
                    cursor="pointer"
                    position={'relative'}
                  >
                    <Box
                      position={'absolute'}
                      bottom={3}
                      right={3}
                      h={'32px'}
                      w={'32px'}
                      borderRadius={'50%'}
                      bg={'#BF9033'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Image
                        src="./EventsImages/cameraIconUpload.png"
                        boxSize="6"
                        color="gray.500"
                        h={'20px'}
                        w={'20px'}
                      />
                    </Box>
                  </Box>
                )}
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </Box>
            </Box>
            {/* ===================RIGHT FORM SECTION===================================================== */}
            <Box h={'100%'} w={'70%'}>
              <VStack
                w={{ base: '80%', '2xl': '60%' }}
                h={'auto'}
                spacing={3}
                mt={3}
              >
                <Input
                  w="100%"
                  h="50px"
                  variant="outline"
                  borderColor="#1E1E1E"
                  name="eventName"
                  placeholder="Enter Event Name"
                  label="Event Name"
                />

                <Box
                  w={'100%'}
                  //   display={'flex'}
                  //   justifyContent={'space-between'}
                >
                  <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-around'}
                    p={0}
                    m={0}
                  >
                    <Text>start </Text>
                    <Text>End </Text>
                  </Box>
                  <Box display={'flex'} gap={3}>
                    <Box
                      w={'50%'}
                      border={'1px solid #000'}
                      display={'flex'}
                      w="49%"
                      h="50px"
                      borderRadius={'10px'}
                    >
                      <Input
                        w="50%"
                        h="50px"
                        type="date"
                        // type="datetime-local"
                        border={'none'}
                        //   borderColor="#1E1E1E"
                        variant="outline"
                        placeholder="date"
                        aria-label="date"
                        //   sx={{
                        //     '::-webkit-calendar-picker-indicator': {
                        //       display: 'none',
                        //     },
                        //     '::-webkit-inner-spin-button': {
                        //       display: 'none',
                        //     },
                        //     '::-webkit-clear-button': {
                        //       display: 'none',
                        //     },
                        //     '::-ms-clear': {
                        //       display: 'none',
                        //     },
                        //     '::-ms-expand': {
                        //       display: 'none',
                        //     },
                        //   }}
                      />
                      <Box h="40px" mt={1} w="1px" bg="#1E1E1E" />
                      <Input
                        w="50%"
                        h="50px"
                        type="time"
                        border={'none'}
                        // type="datetime-local"
                        borderColor="#1E1E1E"
                        variant="outline"
                        placeholder="time"
                        aria-label="Time"
                        //   sx={{
                        //     '::-webkit-calendar-picker-indicator': {
                        //       display: 'none',
                        //     },
                        //     '::-webkit-inner-spin-button': {
                        //       display: 'none',
                        //     },
                        //     '::-webkit-clear-button': {
                        //       display: 'none',
                        //     },
                        //     '::-ms-clear': {
                        //       display: 'none',
                        //     },
                        //     '::-ms-expand': {
                        //       display: 'none',
                        //     },
                        //   }}
                      />
                    </Box>

                    <Box
                      w={'50%'}
                      border={'1px solid #000'}
                      display={'flex'}
                      w="49%"
                      h="50px"
                      borderRadius={'10px'}
                    >
                      <Input
                        w="50%"
                        h="50px"
                        type="date"
                        // type="datetime-local"
                        border={'none'}
                        //   borderColor="#1E1E1E"
                        variant="outline"
                        placeholder="date"
                        aria-label="date"
                        //   sx={{
                        //     '::-webkit-calendar-picker-indicator': {
                        //       display: 'none',
                        //     },
                        //     '::-webkit-inner-spin-button': {
                        //       display: 'none',
                        //     },
                        //     '::-webkit-clear-button': {
                        //       display: 'none',
                        //     },
                        //     '::-ms-clear': {
                        //       display: 'none',
                        //     },
                        //     '::-ms-expand': {
                        //       display: 'none',
                        //     },
                        //   }}
                      />
                      <Box h="40px" mt={1} w="1px" bg="#1E1E1E" />
                      <Input
                        w="50%"
                        h="50px"
                        type="time"
                        border={'none'}
                        // type="datetime-local"
                        borderColor="#1E1E1E"
                        variant="outline"
                        placeholder="time"
                        aria-label="Time"
                        //   sx={{
                        //     '::-webkit-calendar-picker-indicator': {
                        //       display: 'none',
                        //     },
                        //     '::-webkit-inner-spin-button': {
                        //       display: 'none',
                        //     },
                        //     '::-webkit-clear-button': {
                        //       display: 'none',
                        //     },
                        //     '::-ms-clear': {
                        //       display: 'none',
                        //     },
                        //     '::-ms-expand': {
                        //       display: 'none',
                        //     },
                        //   }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Select
                  placeholder="Time ZOne"
                  w="100%"
                  h="50px"
                  borderColor={'#1E1E1E'}
                >
                  <option value="option1">GMT+05:00 Karachi</option>
                  <option value="option2">GMT+05:00 Karachi</option>
                  <option value="option3">GMT+05:00 Karachi</option>
                </Select>
                <Select
                  placeholder="Event Location"
                  w="100%"
                  h="50px"
                  borderColor={'#1E1E1E'}
                >
                  <option value="option1">Karachi</option>
                  <option value="option2">Islamabad</option>
                  <option value="option3">Sialkot</option>
                </Select>
                <Box w="100%">
                  <Textarea
                    w="100%"
                    h="50px"
                    borderColor="#1E1E1E"
                    variant="outline"
                    placeholder="Enter your description here"
                    aria-label="description"
                    resize="vertical"
                    minH="50px"
                  />
                </Box>
                <Select
                  placeholder="Select Tickets Option"
                  w="100%"
                  h="50px"
                  borderColor={'#1E1E1E'}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Select
                  placeholder="Select Capacity Option"
                  w="100%"
                  h="50px"
                  borderColor={'#1E1E1E'}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Box
                  w={'100%'}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Select
                    placeholder="Select Post Options"
                    w="50%"
                    h="50px"
                    borderColor={'#1E1E1E'}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Flex align="center" gap={3}>
                    <Text mr="auto">Require Approval</Text>
                    <Checkbox colorScheme="blue" />
                  </Flex>{' '}
                </Box>
              </VStack>
              <Box
                w={'100%'}
                //   h={'250px'}
                display={'flex'}
                justifyContent="flex-end"
                alignItems="flex-end"
                gap={5}
                pt={'50px'}
                pr={5}
              >
                <Button
                  variant={'solid'}
                  w={'180px'}
                  bg={'#BF9033'}
                  size={'lg'}
                  color={'#FFF'}
                >
                  {' '}
                  Approve
                </Button>
                <Button
                  variant={'outline'}
                  border={'1px solid #BF9033'}
                  color={'#BF9033'}
                  w={'180px'}
                  size={'lg'}
                >
                  Reject
                </Button>
              </Box>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default CreateEventPage;
