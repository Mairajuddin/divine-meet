import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Table,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
const RolesAndPermissionPage = () => {
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
            Roles & Permissions
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
              w={'180px'}
              size={'lg'}
              gap={3}
              bg={'#BF9033'}
              onClick={() => navigate('/create-role')}
            >
              <Image src="./UserManagement/addIcon.svg" h={'30px'} w={'30px'} />
              <Text
                fontSize={'16px'}
                fontWeight={'600'}
                color={'#FFF'}
                fontFamily="'Plus Jakarta Sans', sans-serif"
              >
                Create Role
              </Text>
            </Button>
          </Box>
        </Box>
        <Box h={'80%'} w={'100%'}>
          <TableContainer w={'100%'}>
            <Table
              variant="simple"
              // size={{ base: 'sm', '2xl': 'md' }}
              size={'lg'}
            >
              <Thead>
                <Tr
                  color={'#371E11'}
                  fontSize={'12px'}
                  fontWeight={'600px'}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  borderBottom="2px solid #000"
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
                    Permission
                  </Th>
                  <Th
                    color={'#07304A'}
                    fontSize={'12px'}
                    fontWeight={'600px'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    textAlign={'center'}
                  >
                    Role Type
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
              <Tbody color={'#371E11'}>
                {[1, 2, 3, 4, 5, 7, 8, 9].map((item, _index) => (
                  <Tr key={_index} borderBottom="2px solid #000">
                    <Td
                      textAlign={'center'}
                      display={'flex'}
                      gap={2}
                      justifyContent={'center'}
                      border={'none'}
                    >
                      {' '}
                      <Image src="./PostFeed/postingFeedImage.png" />
                      Qazi Mairaj
                    </Td>
                    <Td textAlign={'center'}>
                      {['List', 'View', 'Create'].map((item, index) => (
                        <Button
                          key={index}
                          color={'#BF9033'}
                          mx={1}
                          bg={'#DFF2FF'}
                          borderRadius={'none'}
                        >
                          {' '}
                          {item}
                        </Button>
                      ))}
                    </Td>
                    <Td textAlign={'center'}> Ameer</Td>

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
                                  // justifyContent={'space-evenly'}
                                  bg={'#F3EDCE'}
                                  onClick={() => navigate('/create-role')}
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
                                    onClick={() => navigate('/approve-event')}
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
          </TableContainer>
        </Box>
      </VStack>
    </Box>
  );
};

export default RolesAndPermissionPage;
