import React, { useState } from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Sidenav = ({ setActiveRoute, handleactiveRoute }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sideNavButtons = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon1: './sideNavImages/homeIcon1.svg',
      icon2: './sideNavImages/homeIcon.svg',
      nestedItems: [],
    },
    {
      label: 'User Management',
      path: '/users',
      icon1: './sideNavImages/userIcon.svg',
      icon2: './sideNavImages/userIcon2.svg',
      nestedItems: [
        { label: 'Users', path: '/users' },
        { label: 'Roles', path: '/roles' },
        { label: 'Permissions', path: '/permissions' },
      ],
    },
    {
      label: 'Roles & Permissions',
      path: '/events',
      icon1: './sideNavImages/pencilIcon.svg',
      icon2: './sideNavImages/pencilIcon2.svg',
      nestedItems: [],
    },
    {
      label: 'Events',
      path: '/events',
      icon1: './sideNavImages/eventsIcon.svg',
      icon2: './sideNavImages/eventsIcon2.svg',
      nestedItems: [],
    },
    {
      label: 'Mosques',
      path: '/mosques',
      icon1: './sideNavImages/mosqueIcon.svg',
      icon2: './sideNavImages/mosqueIcon2.svg',
      nestedItems: [],
    },
    {
      label: 'organization',
      path: '/organization',
      icon1: './sideNavImages/organizationIcon2.svg',
      icon2: './sideNavImages/organizationIcon.png',
      nestedItems: [],
    },

    {
      label: 'Customers',
      path: '/customers',
      icon1: './sideNavImages/groupUsersIcon.svg',
      icon2: './sideNavImages/groupUsersIcon2.svg',
      nestedItems: [],
    },
    {
      label: 'Post Feeds',
      path: '/feeds',
      icon1: './sideNavImages/feedIcon.svg',
      icon2: './sideNavImages/feedIcon2.svg',
      nestedItems: [],
    },
  ];

  const handleItemClick = index => {
    console.log(index, 'índex');
    handleactiveRoute(index);
    setActiveRoute(index);
    setActiveItem(index === activeItem ? null : index); // Toggle active item
  };

  return (
    <Box
      w={'100%'}
      h="100%"
      p={4}
      overflowY={'auto'}
      css={{ '&::-webkit-scrollbar': { display: 'none' } }}
    >
      <Box
        pl={4}
        display="flex"
        alignItems="center"
        gap={3}
        cursor="pointer"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <Image src="./sideNavImages/Union.png" />
        <Text fontSize="20px" fontWeight="700" color="#0E0603">
          DIVINE.MEET
        </Text>
      </Box>

      <VStack spacing={5} mt={20} pl={4} align="stretch">
        {sideNavButtons.map((button, index) => (
          <Box
            key={index}
            bg={index === activeItem ? '#BF9033' : '#FAF8EC'}
            width="100%"
            px={3}
            display={'flex'}
            alignItems={'center'}
            onClick={() => handleItemClick(index)}
            borderRadius={'15px'}
          >
            <Image
              src={index === activeItem ? button.icon2 : button.icon1}
              alt="icon"
              align={'left'}
            />
            <Button
              variant={'solid'}
              justifyContent={'left'}
              fontSize="16px"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight={'510'}
              alignItems={'center'}
              _hover={{ bg: 'none' }}
              size="lg"
              w="100%"
              color={index === activeItem ? '#FFFFFF' : '#371E11'}
              bg={index === activeItem ? '#BF9033' : '#FAF8EC'}
              pl={6}
            >
              {button.label}
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidenav;
