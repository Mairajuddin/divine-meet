import React from 'react';
import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';

const MosqueDetailsPage = () => {
  return (
    <Box
      w={'100%'}
      h={'100%'}
      overflowY={'scroll'}
      css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      mb={10}
    >
      <Box
        h={{ base: '50%', '2xl': '50%' }}
        w={'100%'}
        bgImage={'url(./MosqueImages/MosqueCoverImage.png)'}
        bgSize={'cover'}
        bgPosition={'center'}
        bgRepeat={'no-repeat'}
        // border={'1px solid green'}
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
            Atlanta Masjid of Al-Islam
          </Text>
        </Box>
        <Box w={'100%'} pt={5}>
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
                Location
              </Text>
              <Text
                fontSize={'14px'}
                fontWeight={'400'}
                color={'#000'}
                fontFamily="'Plus Jakarta Sans', sans-serif"
              >
                Atlanta, Georgia
              </Text>
            </Box>
          </Box>

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
          <Box
            w={'100%'}
            pr={7}
            mt={'100px'}
            // h={'250px'}
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
              Remove
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MosqueDetailsPage;
