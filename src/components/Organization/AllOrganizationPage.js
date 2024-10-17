import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  InputLeftElement,
  InputRightElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const AllOrganizationPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      w={'100%'}
      h={'100%'}
      overflowY={'auto'}
      css={{ '&::-webkit-scrollbar': { display: 'none' } }}
    >
      <VStack h={'100%'} w={'100%'}>
        <Box
          h={'12%'}
          w={'100%'}
          borderBottom={'1px solid #0E0603'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          pl={8}
        >
          <Text
            fontSize={'24px'}
            fontWeight={'700'}
            color={'#000'}
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            Organization
          </Text>
          <Box
            display={'flex'}
            w={'70%'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            px={4}
            gap={3}
          >
            <InputGroup width="30%">
              <Input
                type="tel"
                background={'white'}
                borderRadius={10}
                placeholder="Search"
                h="50px"
                ml={2}
              />
              <InputRightElement
                height={'50px'}
                width={'50px'}
                pointerEvents="none"
              >
                <Image
                  src="./NavbarImages/search.svg"
                  alt="search icon"
                  mt={1}
                  // ml={2}

                  pl={3}
                  h="40px"
                  w="40px"
                />
              </InputRightElement>
            </InputGroup>
            <Button
              variant={'solid'}
              w={'200px'}
              size={'lg'}
              gap={3}
              bg={'#BF9033'}
              onClick={() => navigate('/add-organization')}
            >
              <Image src="./UserManagement/addIcon.svg" h={'30px'} w={'30px'} />
              <Text
                fontSize={'16px'}
                fontWeight={'600'}
                color={'#FFF'}
                fontFamily="'Plus Jakarta Sans', sans-serif"
              >
                Add Organization
              </Text>
            </Button>
          </Box>
        </Box>
        <Box h={'80%'} w={'100%'}>
          <TableContainer w={'100%'}>
            <Table
              variant="simple"
              size={{ base: 'sm', '2xl': 'md' }}
              //   size={'lg'}
            >
              <Thead>
                <Tr
                  color={'#000'}
                  fontSize={'12px'}
                  fontWeight={'600px'}
                  fontFamily="Poppins"
                  borderBottom="2px solid #000"
                >
                  <Th textAlign={'center'}>Name</Th>
                  <Th textAlign={'center'}>Location</Th>
                  <Th textAlign={'center'}>Description</Th>
                  <Th textAlign={'center'}>Action</Th>
                </Tr>
              </Thead>
              <Tbody color={'#371E11'}>
                {[1, 2, 3, 4, 5, 7, 8, 9].map((item, _index) => (
                  <Tr key={_index} borderBottom="2px solid #000">
                    <Td
                      textAlign={'center'}
                      display={'flex'}
                      gap={2}
                      justifyContent={'center'}
                      color={'#000'}
                      fontFamily={'poppins'}
                      fontSize={'16px'}
                      border={'none'}
                    >
                      {' '}
                      <Image src="./MosqueImages/mosque-tableIcon.svg" />
                      Atlanta Masjid of Al-Islam
                    </Td>
                    {/* <Td textAlign={'center'}>July/2/2024 6:00PM</Td>
                    <Td textAlign={'center'}>New York City</Td> */}
                    <Td textAlign={'center'}>Atlanta, Georgia</Td>
                    <Td textAlign="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut et massa mi.
                    </Td>
                    {/* <Td textAlign={'center'}>
                      <Button
                        size={'sm'}
                        color={'#BF9033'}
                        fontFamily={'poppins'}
                        bg={'#F3EDCE'}
                      >
                        Pending{' '}
                      </Button>
                    </Td> */}
                    <Td display={'flex'} justifyContent={'center'}>
                      <Menu w={'fit-content'}>
                        <MenuButton
                          as={Button}
                          // size={'lg'}
                          // w={'100%'}
                          // _hover={{
                          //   bg: 'none',
                          // }}
                          // h={'100%'}
                          bg={'none'}
                        >
                          <Image
                            src="./HomeDashboard/TableActionMenue.svg"
                            alt="edit"
                            w={'20px'}
                            h={'20px'}
                            // mx={2}
                          />
                        </MenuButton>
                        <MenuList pos="relative">
                          <VStack w={'100%'}>
                            <Box
                              w={'100%'}
                              display={'flex'}
                              gap={0}
                              flexDirection={'column'}
                              justifyContent={'center'}
                              alignItems={'center'}
                            >
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
                                  onClick={() =>
                                    navigate('/organization-detail')
                                  }
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
                                    onClick={() => navigate('/mosque-detail')}
                                  >
                                    View
                                  </Text>
                                </Button>
                                <Button
                                  // bg={'#BF9033'}
                                  width={'80%'}
                                  fontSize={'16px'}
                                  fontWeight={'400'}
                                  color={'#BF9033'}
                                  fontFamily={'Plus Jakarta Sans, sans-serif'}
                                  lineHeight={'16px'}
                                  fontStyle={'normal'}
                                  letterSpacing={'0.05em'}
                                >
                                  Edit
                                </Button>
                              </Box>
                            </Box>
                          </VStack>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Box
              // mt={5}
              p={6}
              display={'flex'}
              // justifyContent={'center'}
              justifyContent={'space-between'}
            >
              {' '}
              <Text fontSize={'12px'} fontWeight={'500'} color={'#000'}>
                Showing 1 to 10 of 100 results
              </Text>
            </Box>
          </TableContainer>
        </Box>
      </VStack>
    </Box>
  );
};

export default AllOrganizationPage;
