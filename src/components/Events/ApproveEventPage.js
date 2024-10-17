import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ApproveEventPage = () => {
  const avtArray = [
    './HomeDashboard/Ellipse 3.png',
    './HomeDashboard/Ellipse 4.png',
    './HomeDashboard/Ellipse 5.png',
    './HomeDashboard/Ellipse 6.png',
    './HomeDashboard/Ellipse 7.png',
  ];
  return (
    <Box
      w={'100%'}
      h={'100%'}
      overflowY={'scroll'}
      css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      mb={10}
    >
      <Box
        h={{ base: '30%', '2xl': '25%' }}
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
        <Button
          bg="#FFF"
          size="lg"
          w="150px"
          color="#0E0603"
          _hover={{ bg: '#f0f0f0' }}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="400"
          position={'absolute'}
          bottom={'10%'}
          right={'6%'}
          fontSize={'12px'}
          display={'flex'}
          gap={2}
        >
          <Image src="/EventsImages/cameraIcon.png" alt="edit icon" />
          Change Cover
        </Button>
      </Box>
      <Box w={'100%'} h={'300px'} p={3} pt={5}>
        <Box w={'100%'} display={'flex'} gap={3}>
          <Text
            fontSize={'24px'}
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight={'700'}
            color={'#000'}
          >
            Design Meeting
          </Text>
          <Button width={'180px'} variant={'solid'} bg={'#F3EDCE'}>
            <Text
              color={'##BF9033'}
              fontFamily={'poppins'}
              fontSize={'16px'}
              fontWeight={'400'}
              letterSpacing={'1px'}
            >
              Pending
            </Text>
          </Button>
        </Box>
        <Box w={'100%'} pt={5}>
          <HStack spacing="24px" w={'50%'}>
            <Box
              w="50%"
              h="auto"
              display={'flex'}
              flexDirection={'column'}
              gap={6}
            >
              <Box>
                <Text
                  fontSize={'14px'}
                  fontWeight={'600'}
                  color={'#000'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Start
                </Text>
                <Text
                  fontSize={'14px'}
                  fontWeight={'400'}
                  color={'#000'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Tue, Jul 2 {'  '}06:00PM
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={'14px'}
                  fontWeight={'600'}
                  color={'#000'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Time Zone
                </Text>
                <Text
                  fontSize={'14px'}
                  fontWeight={'400'}
                  color={'#000'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  GMT+05:00 Karachi
                </Text>
              </Box>
            </Box>
            <Box
              w="50%"
              h="auto"
              display={'flex'}
              flexDirection={'column'}
              gap={4}
              //   bg={'tomato'}
            >
              <Box>
                <Text
                  fontSize={'14px'}
                  fontWeight={'600'}
                  color={'#000'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  End
                </Text>
                <Text
                  fontSize={'14px'}
                  fontWeight={'400'}
                  color={'#000'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Tue, Jul 2 {'  '}06:00PM
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={'14px'}
                  fontWeight={'600'}
                  color={'#000'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Time Zone
                </Text>
                <Text
                  fontSize={'14px'}
                  fontWeight={'400'}
                  color={'#000'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  GMT+05:00 Karachi
                </Text>
              </Box>
            </Box>
          </HStack>
          <Box mt={3}>
            <Text
              fontSize={'14px'}
              fontWeight={'600'}
              color={'#000'}
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              Description
            </Text>

            <Text
              mt={2}
              textAlign="justify"
              lineHeight="1.2"
              fontFamily="Poppins"
              w={'700px'}
              fontSize={'14px'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </Text>
          </Box>
          <Box mt={3}>
            <HStack spacing="24px" w={'50%'}>
              <Box
                w="50%"
                h="auto"
                display={'flex'}
                flexDirection={'column'}
                gap={6}
              >
                <Box>
                  <Text
                    fontSize={'14px'}
                    fontWeight={'600'}
                    color={'#000'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    Tickets
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={'400'}
                    color={'#000'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    Paid
                  </Text>
                </Box>
              </Box>
              <Box
                w="50%"
                h="auto"
                display={'flex'}
                flexDirection={'column'}
                gap={4}
                //   bg={'tomato'}
              >
                <Box>
                  <Text
                    fontSize={'14px'}
                    fontWeight={'600'}
                    color={'#000'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    Capacity
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={'400'}
                    color={'#000'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    Unlimited
                  </Text>
                </Box>
              </Box>
            </HStack>
            <HStack h={'100%'} w={'100%'} spacing={1} mt={5}>
              <Box w={'50%'} h={'100%'}>
                <Box
                  w="50%"
                  h="auto"
                  display={'flex'}
                  flexDirection={'column'}
                  gap={6}
                >
                  <Box>
                    <Text
                      fontSize={'14px'}
                      fontWeight={'600'}
                      color={'#000'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      Post View
                    </Text>
                    <Text
                      fontSize={'14px'}
                      fontWeight={'400'}
                      color={'#000'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      Public
                    </Text>
                  </Box>
                </Box>
                <VStack spacing={4} align="stretch" mt={7} pb={2}>
                  <Box h="auto" w={'60%'}>
                    <Text
                      fontSize={'14px'}
                      fontWeight={'600'}
                      color={'#000'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      {' '}
                      Event Participate
                    </Text>
                    <Box
                      h={{ base: '20px', '2xl': '35px' }}
                      // bg="pink.100"
                      mt={3}
                      display={'flex'}
                      alignItems={'center'}
                      ml={3}
                    >
                      {avtArray.map((item, index) => (
                        <Image
                          key={index}
                          src={item}
                          alt="avt"
                          ml={-3}
                          h={'36px'}
                          w={'36px'}
                        />
                      ))}
                      <Text
                        fontSize={'15px'}
                        fontWeight={'500'}
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        ml={2}
                        color={'#000'}
                      >
                        +5
                      </Text>
                    </Box>
                  </Box>
                  <Box h="auto" w={'60%'}>
                    <Text
                      fontSize={'14px'}
                      fontWeight={'600'}
                      color={'#000'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      {' '}
                      Event Participate
                    </Text>
                    <Box
                      h={{ base: '20px', '2xl': '35px' }}
                      // bg="pink.100"
                      mt={3}
                      display={'flex'}
                      alignItems={'center'}
                      ml={3}
                    >
                      {avtArray.map((item, index) => (
                        <Image
                          key={index}
                          src={item}
                          alt="avt"
                          ml={-3}
                          h={'36px'}
                          w={'36px'}
                        />
                      ))}
                      <Text
                        fontSize={'15px'}
                        fontWeight={'500'}
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        ml={2}
                        color={'#000'}
                      >
                        +5
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              </Box>
              <Box
                w={'50%'}
                h={'250px'}
                display={'flex'}
                justifyContent="flex-end"
                alignItems="flex-end"
                gap={3}
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
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ApproveEventPage;
