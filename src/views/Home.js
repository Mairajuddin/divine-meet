import { Box, Stack, Text } from '@chakra-ui/react';
// import MainDashboard from '../components/DashNav/MainDashboard';
import HomePage from '../components/Home/HomePage';

export default function Home() {
  return (
    <>
      <HomePage />
    </>
    // <MainDashboard>
    //   <Box
    //     w={'100%'}
    //     h={'100%'}
    //     display={'flex'}
    //     justifyContent={'center'}
    //     alignItems={'center'}
    //   >
    //     <Box
    //       ml={{ base: '20px', lg: '35px' }}
    //       mt={'20px'}
    //       display="flex"
    //       justifyContent="çenter"
    //       alignItems="çenter"
    //       border={'2px solid green'}
    //       h="calc(100% - 70px)" // Adjust this value based on the height of your Topnav
    //       w="95%"
    //       borderRadius={'20px'}
    //     >
    //       <Text fontSize={38}>Let's Start Something Awesome!</Text>
    //     </Box>
    //   </Box>
    // </MainDashboard>
  );
}
