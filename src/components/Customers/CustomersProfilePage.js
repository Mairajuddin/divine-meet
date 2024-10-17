import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  StackDivider,
  Text,
  VStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react';
import React from 'react';

const CustomersProfilePage = () => {
  const skillsArray = [
    'Project Management',
    'Strategy',
    'Startups',
    'Marketing',
    'Design',
  ];
  const avtArray = [
    './HomeDashboard/Ellipse 3.png',
    './HomeDashboard/Ellipse 4.png',
    './HomeDashboard/Ellipse 5.png',
    './HomeDashboard/Ellipse 6.png',
    './HomeDashboard/Ellipse 7.png',
  ];
  return (
    <Box w={'100%'} h={'100%'}>
      <VStack
        h={'100%'}
        w={'100%'}
        spacing={2}
        overflowY={'scroll'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        <Box
          h={'30%'}
          w={'100%'}
          bg={'#371E11'}
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
        <Box h={'50%'} w={'100%'}>
          <Box h={'auto'}>
            <HStack
              h={'100%'}
              w={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box w={'70%'} h={'100%'} pt={5}>
                <VStack
                  h="100%"
                  w="100%"
                  align="start"
                  pl={'70px'}
                  spacing={1}
                  pt={3}
                >
                  <Text
                    fontSize="24px"
                    textAlign="left"
                    fontWeight={'600'}
                    fontStyle={'normal'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    Usman Waheed
                  </Text>
                  <Text
                    fontSize="14px"
                    textAlign="left"
                    lineHeight={'18px'}
                    fontWeight={'400'}
                    fontStyle={'normal'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    Renaissance Man & Entrepreneur Founder @ Mecca Digital &
                    <br />
                    Fursa Hard knocks University, PHD DFW : Dallas Fort Worth
                  </Text>
                  <Text
                    fontSize="14px"
                    textAlign="left"
                    color={'#BF9033'}
                    fontWeight={'600'}
                    fontStyle={'normal'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    mt={'5px'}
                  >
                    Renaissance Man & Entrepreneur Founder @ Mecca Digital &
                  </Text>

                  <Box w={'100%'} display={'flex'} gap={2} mt={4}>
                    <Button
                      variant={'solid'}
                      bg={'#BF9033'}
                      w={'180px'}
                      color={'#FFF'}
                      fontSize={'16px'}
                      fontWeight={'600'}
                      size={'lg'}
                      borderRadius={'25px'}
                    >
                      {' '}
                      Connect
                    </Button>
                    <Button
                      variant={'outline'}
                      border={'1px solid #BF9033'}
                      color={'#BF9033'}
                      w={'180px'}
                      size={'lg'}
                      fontSize={'16px'}
                      fontWeight={'600'}
                      borderRadius={'25px'}
                    >
                      Message
                    </Button>
                  </Box>
                </VStack>
              </Box>
              <Box
                w={'30%'}
                h={'220px'}
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'flex-start'}
                pr={6}
                pt={3}
              >
                <Image
                  src="./HomeDashboard/TableActionMenue.svg"
                  alt="user icon"
                  h={'36px'}
                  w={'36px'}
                />
              </Box>
            </HStack>
          </Box>
          <Box h={'100%'} mt={0} mb={1}>
            <HStack h={'100%'} w={'100%'} justifyContent={'space-between'}>
              <Box w={'70%'} h={'100%'}>
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={4}
                  align="stretch"
                  //   align="start"
                  pl={'65px'}
                  pt={3}
                >
                  <Box h="auto">
                    <Text
                      fontSize="18px"
                      textAlign="left"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontWeight={'600'}
                    >
                      About
                    </Text>
                    <Text
                      w={'80%'}
                      textAlign={'justify'}
                      mt={1}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontSize={'14px'}
                      fontWeight={'400'}
                    >
                      Salaam all... I am an entrepreneur at heart that has
                      built, sold and lost companies over the years and have had
                      the pleasure of speaking on stages in over 12 countries.
                      Today I am helping build Islamic Digital Infrastructure
                      and technology platforms to help resolve what i believe to
                      be the biggest problem in our community.
                    </Text>
                  </Box>

                  <Box
                    h="auto"
                    display={'flex'}
                    flexDirection={'column'}
                    gap={3}
                  >
                    <Text
                      fontSize={'18px'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontWeight={'600'}
                    >
                      My Skills
                    </Text>
                    <HStack spacing={4}>
                      {skillsArray.map((item, index) => (
                        <Tag
                          size={'lg'}
                          //   colorScheme="teal"
                          color={'#000'}
                          border={'1px solid #BF9033'}
                          p={'10px 14px'}
                          borderRadius={'25px'}
                          bg={'#F3EDCE'}
                          fontFamily={'12px'}
                        >
                          {item}
                        </Tag>
                      ))}
                    </HStack>
                  </Box>
                  <Box
                    h="auto"
                    display={'flex'}
                    flexDirection={'column'}
                    gap={3}
                  >
                    <Text
                      fontSize={'18px'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontWeight={'600'}
                    >
                      My Goals
                    </Text>
                    <HStack spacing={4}>
                      {skillsArray.map((item, index) => (
                        <Tag
                          size={'lg'}
                          //   colorScheme="teal"
                          color={'#000'}
                          border={'1px solid #BF9033'}
                          p={'10px 14px'}
                          borderRadius={'25px'}
                          bg={'#F3EDCE'}
                          fontFamily={'12px'}
                        >
                          {item}
                        </Tag>
                      ))}
                    </HStack>
                  </Box>
                </VStack>
              </Box>
              <Box w={'30%'} h={'100%'} pt={2} pl={1}>
                <Text
                  fontSize={'18px'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight={'600'}
                >
                  Events Attends
                </Text>
                {[1, 2].map(() => (
                  <Box
                    mt={3}
                    w={{ base: '100%', '2xl': '85%' }}
                    height={{ base: '70%', '2xl': '35%' }}
                    border={'1px solid #BF9033'}
                    borderRadius={'10px'}
                    bg={'#F3EDCE'}
                    p={3}
                  >
                    <HStack h={'100%'} w={'100%'}>
                      <Box w={'50%'}>
                        <VStack h={'100%'} w={'100%'} align={'start'}>
                          <Text
                            fontSize={'24px'}
                            fontWeight={'500'}
                            color={'#000'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                          >
                            {' '}
                            18{' '}
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#000',
                              }}
                            >
                              {' '}
                              July
                            </span>
                          </Text>
                          <Text
                            color={'#000'}
                            fontSize={'16px'}
                            fontWeight={'700'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                          >
                            {' '}
                            Design Meeting
                          </Text>
                          <Box
                            display={'flex'}
                            gap={2}
                            flexDirection={'column'}
                          >
                            <Box display={'flex'} gap={2}>
                              <Image
                                src="./Customers/clockImage.svg"
                                h={'16px'}
                                w={'16px'}
                              />
                              <Text
                                color={'#000'}
                                fontSize={'12px'}
                                fontFamily="'Plus Jakarta Sans', sans-serif"
                              >
                                10:15AM - 12-30PM
                              </Text>
                            </Box>
                            <Box display={'flex'} gap={2}>
                              <Image
                                src="./Customers/locationImage.svg"
                                h={'16px'}
                                w={'16px'}
                              />
                              <Text
                                color={'#000'}
                                fontSize={'12px'}
                                fontFamily="'Plus Jakarta Sans', sans-serif"
                              >
                                Las vegas
                              </Text>
                            </Box>
                          </Box>
                        </VStack>
                      </Box>
                      <Box
                        w={'50%'}
                        h={'100%'}
                        pr={3}
                        display={'flex'}
                        justifyContent={'flex-end'}
                        alignItems={'flex-end'}
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
                      </Box>
                    </HStack>
                  </Box>
                ))}
              </Box>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default CustomersProfilePage;
