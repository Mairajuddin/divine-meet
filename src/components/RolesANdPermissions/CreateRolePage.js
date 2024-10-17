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
  Textarea,
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const rolePermissionArray = [
  {
    role: 'User Management',
    check1: '',
    check2: '',
  },
  {
    role: 'Events ',
    check1: '',
    check2: '',
  },
  {
    role: 'Mosques ',
    check1: '',
    check2: '',
  },
  {
    role: 'Customers ',
    check1: '',
    check2: '',
  },
  {
    role: 'Post Feeds',
    check1: '',
    check2: '',
  },
  {
    role: 'Organization',
    check1: '',
    check2: '',
  },
  {
    role: 'Settings',
    check1: '',
    check2: '',
  },
];

const CreateRolePage = () => {
  const navigate = useNavigate();
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
            Create Role & Permissions
          </Text>
        </Box>
        <Box h={'100%'} w={'100%'} p={6}>
          <VStack w={'70%'} h={'95%'}>
            <Box w={'100%'} h={'auto'} display={'flex'} gap={'100px'}>
              <Text
                fontSize={'16px'}
                color="#000"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight={'700'}
                fontStyle={'normal'}
              >
                {' '}
                Role Details
              </Text>
              <Box mt={3}>
                <Text fontSize={'12px'} color={'#949494'} fontWeight={'500'}>
                  {' '}
                  Role Name
                </Text>
                <Input
                  w="500px"
                  h="50px"
                  variant="outline"
                  borderColor="#1E1E1E"
                  name="eventName"
                  placeholder="Enter Role Name"
                  label="Event Name"
                />
              </Box>
            </Box>
            <Box
              w={'100%'}
              h={'auto'}
              mt={8}
              display={'flex'}
              gap={'100px'}
              justifyContent={'flex-start'}
            >
              <TableContainer
                w={'100%'}
                alignContent={'flex-start'}
                border={'none'}
              >
                <Table variant="simple" size={'lg'}>
                  <Thead>
                    <Tr
                      fontSize={'16px'}
                      color="#000"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontWeight={'700'}
                      fontStyle={'normal'}
                    >
                      <Th border="none">New Role</Th>
                      <Th border="none">Admin</Th>
                      <Th border="none">Ameer</Th>
                    </Tr>
                  </Thead>
                  <Tbody color={'#371E11'}>
                    {rolePermissionArray.map((item, _index) => (
                      <Tr
                        key={_index}
                        border="none"
                        fontSize={'16px'}
                        textAlign={'center'}
                        color="#000"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontWeight={'500'}
                        fontStyle={'normal'}
                      >
                        <Td border="none">{item.role}</Td>
                        <Td border="none">
                          <Checkbox size={'lg'} />
                        </Td>
                        <Td border="none">
                          <Checkbox size={'lg'} />
                        </Td>
                        {/* <Td textAlign={'center'}>Paid</Td>
                        <Td textAlign={'center'}>Unlimited</Td> */}
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>{' '}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default CreateRolePage;
