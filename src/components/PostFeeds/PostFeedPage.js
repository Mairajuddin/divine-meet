import { AttachmentIcon, CheckIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const PostFeedPage = () => {
  return (
    <Box w={'100%'} h={'100%'} p={5}>
      <Box w={'100%'} h={'100%'}>
        <HStack
          w={'100%'}
          height={'100%'}
          overflowY={'auto'}
          css={{ '&::-webkit-scrollbar': { display: 'none' } }}
        >
          <Box
            w={'70%'}
            h={'100%'}

            // border={'1px solid green'}
          >
            <VStack w={'100%'} h={'100%'} spacing={2}>
              <Box
                w={'100%'}
                h={{ base: '30%', '2xl': '20%' }}
                border={'1px solid #D9D9D9'}
                boxShadow={'0px 0px 10px #D9D9D9'}
                borderRadius={'15px'}
              >
                <VStack
                  w={'100%'}
                  h={'100%'}
                  divider={<StackDivider borderColor="gray.200" />}
                >
                  <Box h={'40%'} w={'100%'} p={6}>
                    <Text
                      textAlign={'left'}
                      color={'#000'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontWeight={'600'}
                      fontSize={'14px'}
                    >
                      Post Something
                    </Text>
                  </Box>
                  <Box
                    p={6}
                    w={'100%'}
                    display={'flex'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-start'}
                    gap={2}
                  >
                    <Image
                      src="./PostFeed/postingFeedImage.png"
                      h={'32px'}
                      w={'32px'}
                    />
                    <Input
                      placeholder="What's on Your Mind?"
                      border={'none'}
                      w={'20%'}
                    />
                  </Box>
                </VStack>
              </Box>
              {[1, 2, 3].map((item, index) => (
                <Box
                  w={'100%'}
                  my={2}
                  h={'auto'}
                  border={'1px solid #D9D9D9'}
                  boxShadow=" 0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)"
                  borderRadius={'15px'}
                  p={6}
                >
                  <Box
                    w={'100%'}
                    //   border={'1px solid red'}
                    display={'flex'}
                    justifyContent={'space-between'}
                  >
                    <Box display={'flex'} alignItems={'center'} gap={4}>
                      <Image
                        src="./PostFeed/PostProfile.svg"
                        h={'42px'}
                        w={'42px'}
                      />
                      <Box>
                        <Text
                          fontSize={'16px'}
                          fontWeight={'600'}
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                          color={'#000'}
                        >
                          {' '}
                          Qazi Mairaj
                        </Text>
                        <Text
                          fontSize={'12px'}
                          fontWeight={'600'}
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                          color={'#747474'}
                        >
                          {' '}
                          03 July at 03:16 PM{' '}
                        </Text>
                      </Box>
                    </Box>
                    <Image
                      src="./HomeDashboard/TableActionMenue.svg"
                      h={'24px'}
                      w={'24px'}
                    />
                  </Box>
                  <Text
                    fontSize={'13px'}
                    fontWeight={'400'}
                    color={'#000'}
                    textAlign={'justify'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    mt={5}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna.
                  </Text>
                  <Image
                    src="./PostFeed/post.png"
                    h={'500px'}
                    w={'100%'}
                    mt={3}
                  />
                  <Divider my={3} border={'1.2px solid  #D9D9D9'} w={'100%'} />
                  <Box
                    w={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    px={3}
                  >
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      gap={1}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      <Image
                        src="./PostFeed/CommentIcon.svg"
                        h={'22px'}
                        w={'22px'}
                      />
                      <Text
                        fontSize={'12px'}
                        fontWeight={'400'}
                        color={'#767676'}
                      >
                        25{'  '} Comments
                      </Text>
                    </Box>
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      gap={1}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      <Image
                        src="./PostFeed/heartIcon.png"
                        h={'22px'}
                        w={'22px'}
                      />
                      <Text
                        fontSize={'12px'}
                        fontWeight={'400'}
                        color={'#767676'}
                      >
                        100{'  '} Likes
                      </Text>
                    </Box>
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      gap={1}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      <Image
                        src="./PostFeed/shareIcon.svg"
                        h={'22px'}
                        w={'22px'}
                      />
                      <Text
                        fontSize={'12px'}
                        fontWeight={'400'}
                        color={'#767676'}
                      >
                        23{'  '} shares
                      </Text>
                    </Box>
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      gap={1}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      <Image
                        src="./PostFeed/saveIcon.svg"
                        h={'22px'}
                        w={'22px'}
                      />
                      <Text
                        fontSize={'12px'}
                        fontWeight={'400'}
                        color={'#767676'}
                      >
                        12{'  '} Saved
                      </Text>
                    </Box>
                  </Box>
                  <Divider my={3} border={'1.2px solid  #D9D9D9'} w={'100%'} />
                  <Box
                    display={'flex'}
                    gap={2}
                    alignItems={'center'}
                    w={'100%'}
                    px={3}
                  >
                    <Image
                      src="./PostFeed/postingFeedImage.png"
                      h={'32px'}
                      w={'32px'}
                    />
                    <InputGroup>
                      <Input
                        type="tel"
                        placeholder="Write your Comment"
                        bg={'#F4F4F4'}
                        border={'1px solid #D9D9D9'}
                      />
                      <InputRightElement width="7.5rem">
                        <Box display="flex" gap={3}>
                          <Image
                            src="./PostFeed/attachmentIcon.svg"
                            h={'22px'}
                            w={'22px'}
                          />
                          <Image
                            src="./PostFeed/emojiIcon.svg"
                            h={'22px'}
                            w={'22px'}
                          />
                          <Image
                            src="./PostFeed/galleryIcon.svg"
                            h={'22px'}
                            w={'22px'}
                          />
                          {/* <AttachmentIcon color="gray.500" /> */}
                          {/* <EmojiIcon color="gray.500" />
                        <GalleryIcon color="gray.500" /> */}
                        </Box>
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                </Box>
              ))}
            </VStack>
          </Box>
          <Box
            w={'30%'}
            h={'auto'}
            mt={{ base: '400px', '2xl': '80px' }}
            py={1}
            border={'1.2px solid  #D9D9D9'}
            boxShadow=" 0px 5px 6.9px 0px rgba(0, 0, 0, 0.25)"
            borderRadius={'15px'}
          >
            <Text
              m={5}
              fontSize={'14px'}
              fontWeight={'600'}
              fontFamily="'Plus Jakarta Sans', sans-serif"
              color={'#000'}
            >
              Users
            </Text>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
              (item, index) => (
                <>
                  <Divider my={3} border={'1.2px solid  #D9D9D9'} w={'100%'} />
                  <Box px={5} display={'flex'} alignItems={'center'} gap={5}>
                    <Image
                      src="./PostFeed/postingFeedImage.png"
                      h={'32px'}
                      w={'32px'}
                    />{' '}
                    <Text
                      fontSize={'16px'}
                      fontWeight={'600'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      color={'#000'}
                    >
                      Qazi Mairaj
                    </Text>
                  </Box>
                </>
              )
            )}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default PostFeedPage;
