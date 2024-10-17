import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MainDashboard = ({ children }) => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState(null);
  const handleactiveRoute = item => {
    console.log(item, 'itesssm');
    switch (item) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/all-user');
        break;
      case 2:
        navigate('/roles-and-permissions');
        break;
      case 3:
        navigate('/all-event');
        break;
      case 4:
        navigate('/all-mosque');
        break;
      case 5:
        navigate('/all-organization');
        break;

      case 6:
        navigate('/all-customers');
        break;
      case 7:
        navigate('/posts');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Box
        w="100vw"
        // h="700px"
        bg="#FAF8EC"
        h="100vh"
        // border="1px solid red"
        display="flex"
        overflow="hidden"
      >
        <Box w="350px" h="100%">
          <Sidenav
            setActiveRoute={setActiveRoute}
            handleactiveRoute={handleactiveRoute}
          />
        </Box>
        <Box w="100%" spacing="0">
          <Topnav />
          <Box
            bg="white"
            h="calc(100% - 120px)"
            // border={'2px solid purple'}
            borderRadius={'45px'}
            w="calc(100% - 20px)"
          >
            <Box
              h="100%"
              w="100%"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              // overflowY={'auto'}
            >
              <Outlet />
              {/* {children} */}
            </Box>
            {/* </Box> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainDashboard;
