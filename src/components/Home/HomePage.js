import {
  Box,
  Button,
  Image,
  Stack,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useBreakpointValue,
} from '@chakra-ui/react';
// import MainDashboard from '../components/DashNav/MainDashboard';
import MainDashboard from '../DashNav/MainDashboard';

export default function HomePage() {
  const tableSize = useBreakpointValue({ base: 'sm', '2xl': 'md' });
  const avtArray = [
    './HomeDashboard/Ellipse 3.png',
    './HomeDashboard/Ellipse 4.png',
    './HomeDashboard/Ellipse 5.png',
    './HomeDashboard/Ellipse 6.png',
    './HomeDashboard/Ellipse 7.png',
  ];

  const cardData = [
    {
      number: 100,
      title: 'Úsers',
      icon: './HomeDashboard/cardUsersIcon.svg',
    },
    {
      number: 25,
      title: 'Events',
      icon: './HomeDashboard/cardEventsIcon.svg',
    },
    {
      number: 50,
      title: 'Customers',
      icon: './HomeDashboard/cardCustomersIcon.svg',
    },
  ];

  return (
    // <MainDashboard>
    <Box
      w={'99%'}
      h={'100%'}
      // border={'2px solid red'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}

      // p={1}
    >
      <Box
        // border={'2px solid red'}
        overflowY={'auto'}
        display={'flex'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
        w={'99%'}
        h={'99%'}
        gap={3}
      >
        <Box w={'75%'} h={'100%'}>
          <VStack
            h={'100%'}
            // overflowY="auto"
            // css={{ '&::-webkit-scrollbar': { display: 'none' } }}
          >
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              w={'100%'}
              h={'33%'}
              p={2}
            >
              <Box
                w={'100%'}
                h={'95%'}
                bg={'#F3EDCE'}
                borderRadius={'16px'}
                boxShadow=" 0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)"
                display={'flex'}
                // p={2}
              >
                <Box w={'70%'} h={'100%'}>
                  <VStack
                    w={'100%'}
                    h={'100%'}
                    alignItems="flex-start"
                    ml={2}
                    p={3}
                    spacing={{ base: 0, '2xl': 4 }}
                  >
                    <Text
                      color={'#000000'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontSize={'20px'}
                      fontWeight={'700'}
                    >
                      Hello Qazi Mairaj !{' '}
                    </Text>
                    <Text
                      color={'#000000'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontSize={{ base: '12px', '2xl': '16px' }}
                      fontWeight={'400'}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <br /> Ut et massa mi.{' '}
                    </Text>
                    <Button
                      mt={{ base: 2, '2xl': 10 }}
                      size={{ base: 'md', '2xl': 'lg' }}
                      bg={'#BF9033'}
                      borderRadius={'10px'}
                      color={'#FFF'}
                      fontWeight={'400'}
                    >
                      {' '}
                      Write New Post{' '}
                    </Button>
                    {/* <Box></Box> */}
                    {/* <Box></Box> */}
                  </VStack>
                </Box>
                <Box
                  w={'30%'}
                  h={'100%'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Image
                    w={'100%'}
                    h={'100%'}
                    src="./HomeDashboard/Character.svg"
                    alt="character"
                  />
                </Box>
              </Box>
            </Box>
            <Box
              w={'100%'}
              h={'33%'}
              // border={'1px solid  purple'}
              p={2}
              // bg={'#F0F9FF'}
            >
              <Box
                h={'100%'}
                bg={'#FAF8EC'}
                borderRadius={'10px'}
                boxShadow=" 0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)"
              >
                <Box
                  w={'100%'}
                  // border={'1px solid green'}
                  h={{ base: '10%', '2xl': '15%' }}
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  px={5}
                >
                  <Text
                    fontSize={'18px'}
                    fontWeight={'700'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    New Users List
                  </Text>
                  <Image
                    src="./HomeDashboard/TableActionMenue.svg"
                    alt="edit"
                    w={'20px'}
                    h={'20px'}
                    transform={'rotate(90deg)'}
                  />
                </Box>
                <Box
                  w={'100%'}
                  // border={'1px solid green'}
                  // h={'85%'}
                  h={{ base: '90%', '2xl': '85%' }}
                  overflowY={'hidden'}
                >
                  <TableContainer>
                    <Table
                      variant="simple"
                      // size={{ base: 'sm', '2xl': 'md' }}
                      size={tableSize}
                    >
                      <Thead bg={'#E8D8A0'}>
                        <Tr
                          color={'#371E11'}
                          fontSize={'12px'}
                          fontWeight={'600px'}
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                        >
                          <Th
                            color={'#371E11'}
                            fontSize={'12px'}
                            fontWeight={'600px'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            textAlign={'center'}
                          >
                            Name
                          </Th>
                          <Th
                            color={'#07304A'}
                            fontSize={'12px'}
                            fontWeight={'600px'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            textAlign={'center'}
                          >
                            Designation
                          </Th>
                          <Th
                            color={'#07304A'}
                            fontSize={'12px'}
                            fontWeight={'600px'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            textAlign={'center'}
                          >
                            Country
                          </Th>
                          <Th
                            color={'#07304A'}
                            fontSize={'12px'}
                            fontWeight={'600px'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            textAlign={'center'}
                          >
                            Emailt
                          </Th>
                          <Th
                            color={'#07304A'}
                            fontSize={'12px'}
                            fontWeight={'600px'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            textAlign={'center'}
                          >
                            Mobile
                          </Th>
                          <Th
                            color={'#07304A'}
                            fontSize={'12px'}
                            fontWeight={'600px'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            textAlign={'center'}
                          >
                            Action
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody bg={'#FAF8EC'} color={'#371E11'}>
                        {[1, 2, 3, 4, 5].map((item, _index) => (
                          <Tr key={_index} borderBottom="2px solid #371E11">
                            <Td textAlign={'center'}>Qazi Mairaj</Td>
                            <Td textAlign={'center'}>Software Engineer</Td>
                            <Td textAlign={'center'}> Pakistan</Td>
                            <Td textAlign={'center'}>abdulmaroof@gmail.com</Td>
                            <Td textAlign={'center'}>+92300-2345876</Td>
                            <Td display={'flex'} justifyContent={'center'}>
                              <Image
                                src="./HomeDashboard/TableActionMenue.svg"
                                alt="edit"
                                w={'20px'}
                                h={'20px'}
                                // mx={2}
                              />
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Box>
            <Box w={'100%'} h={'auto'} p={2}>
              <Box
                bg={'#FAF8EC'}
                h={{ base: '250px', '2xl': '300px' }}
                borderRadius={'10px'}
                boxShadow=" 0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)"
              >
                <Box
                  w={'100%'}
                  // border={'1px solid green'}
                  h={{ base: '10%', '2xl': '50px' }}
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  px={5}
                >
                  <Text
                    fontSize={'18px'}
                    fontWeight={'700'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                  >
                    Upcoming Events
                  </Text>
                  <Image
                    src="./HomeDashboard/TableActionMenue.svg"
                    alt="edit"
                    w={'20px'}
                    h={'20px'}
                    transform={'rotate(90deg)'}
                  />
                </Box>
                <Box
                  w={'100%'}
                  h={{ base: '90%', '2xl': '85%' }}
                  display={'flex'}
                  gap={5}
                  p={3}
                  px={8}
                >
                  {[1, 2, 3].map((item, index) => (
                    <Box
                      p={4}
                      key={index}
                      h={'95%'}
                      // border={'1px solid green'}
                      boxShadow={'0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)'}
                      borderRadius={'10px'}
                      bg={'#FFFFFF'}
                      w={'50%'}
                    >
                      <VStack
                        // divider={<StackDivider borderColor="gray.200" />}
                        spacing={1}
                        p={1}
                        align="stretch"
                      >
                        <Text
                          lineHeight={{ base: '20px', '2xl': '35px' }}
                          px={3}
                          fontWeight={'500'}
                          fontSize={'24px'}
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                        >
                          18{'  '}
                          <span
                            style={{ fontSize: '14px', fontWeight: 'bold' }}
                          >
                            July
                          </span>
                        </Text>
                        <Text
                          lineHeight={{ base: '20px', '2xl': '35px' }}
                          px={3}
                          fontWeight={'700'}
                          fontSize={'16px'}
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                        >
                          Design Meeting
                        </Text>
                        <Box display={'flex'} gap={2} flexDirection={'column'}>
                          <Box
                            display={'flex'}
                            alignItems={'center'}
                            h={'100%'}
                            w={'100%'}
                            gap={3}
                            // justifyContent={'space-evenly'}
                          >
                            <Image
                              src="./HomeDashboard/clockIcon.svg"
                              alt=""
                              h={'30px'}
                              w={'30px'}
                            />
                            <Text
                              fontSize={'15px'}
                              fontWeight={'500'}
                              color={'#8C8C8C'}
                            >
                              10:00 AM - 11:00 AM
                            </Text>
                          </Box>
                          <Box
                            display={'flex'}
                            alignItems={'center'}
                            h={'100%'}
                            w={'100%'}
                            gap={3}
                            // justifyContent={'space-evenly'}
                          >
                            <Image
                              src="./HomeDashboard/clockIcon.svg"
                              alt=""
                              h={'30px'}
                              w={'30px'}
                            />
                            <Text
                              fontSize={'15px'}
                              fontWeight={'500'}
                              color={'#8C8C8C'}
                            >
                              10:00 AM - 11:00 AM
                            </Text>
                          </Box>
                        </Box>
                        <Box
                          h={{ base: '20px', '2xl': '35px' }}
                          // bg="pink.100"
                          display={'flex'}
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
                        </Box>
                      </VStack>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </VStack>
        </Box>
        {/* =====================Right Section================================ */}
        <Box
          w={'25%'}
          h={{ base: 'auto', '2xl': '100vh' }}
          // border={'1px solid green'}
          p={2}
          my={2}
          // overflow={'hidden'}
        >
          <VStack spacing={4} align="stretch">
            <Box display={'flex'} gap={2} flexDirection={'column'}>
              {cardData.map((item, index) => (
                <Box key={index} h="auto">
                  <Box
                    display={'flex'}
                    bg={'#F3EDCE'}
                    justifyContent={'space-between'}
                    px={5}
                    h={'130px'}
                    alignItems={'center'}
                    borderLeft={'5px solid #BF9033'}
                    borderRadius={'10px'}
                    boxShadow={'0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)'}
                  >
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      flexDirection={'column'}
                      p={2}
                    >
                      <Text
                        fontSize={'46px'}
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontWeight={'600'}
                        color={'#371E11'}
                      >
                        {item.number}
                      </Text>
                      <Text
                        fontSize={'16px'}
                        fontWeight={'500'}
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        color={'#371E11'}
                      >
                        {item.title}
                      </Text>
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        h={'53px'}
                        w={'53px'}
                        bg={'#BF9033'}
                        p={2}
                        borderRadius={'10px'}
                      >
                        <Image
                          src={item.icon}
                          alt="avt"
                          h={'36px'}
                          w={'36px'}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              h="auto"
              bg="#FAF8EC"
              p={2}
              mt={2}
              mb={2}
              borderRadius={'10px'}
              boxShadow={'0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)'}
            >
              <Box
                h={'40px'}
                w={'100%'}
                // border={'1px solid red'}
                display={'flex'}
                justifyContent={'space-between'}
                px={5}
                alignItems={'center'}
              >
                <Text
                  fontSize={'18px'}
                  fontWeight={'700'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  Recent Activity
                </Text>
                <Image
                  src="./HomeDashboard/TableActionMenue.svg"
                  alt="edit"
                  w={'20px'}
                  h={'20px'}
                  transform={'rotate(90deg)'}
                />
              </Box>
              <Box display={'flex'} flexDirection={'column'} mt={2}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <Box display={'flex'} h={'80px'} w={'100%'} p={2}>
                    <Box
                      w={'30%'}
                      h={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Image
                        src="./NavbarImages/Avatar.png"
                        alt="img"
                        h={'46px'}
                        w={'46%'}
                      />
                    </Box>
                    <Box
                      w={'70%'}
                      h={'100%'}
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'flex-start'}
                    >
                      <Text
                        fontSize={'16px'}
                        fontWeight={'600'}
                        color={'#371E11'}
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                      >
                        {' '}
                        Qazi Mairaj
                      </Text>
                      <Text fontSize={'12px'} fontWeight={'500'}>
                        has add new event for UI UX Workshop{' '}
                      </Text>
                      <Text fontSize={'12px'} fontWeight={'500'}>
                        5 minute ago
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
    // </MainDashboard>
  );
}
