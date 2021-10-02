import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsPencilSquare,
  BsSearch,
} from 'react-icons/bs';
import { data } from './_data';
import { MobileMenuButton } from './MobileMenuButton';
import { NavBreadcrumb } from './NavBreadcrumb';
import { NavSectionTitle } from './NavSectionTitle';
import { ScrollArea } from './ScrollArea';
import { SearchInput } from './SearchInput';
import { SidebarLink } from './SidebarLink';
import { useMobileMenuState } from './useMobileMenuState';
import { UserInfo } from './UserInfo';

export default function App() {
  const { isOpen, toggle } = useMobileMenuState();
  return (
    <Flex
      height="100vh"
      bg={mode('blue.800', 'gray.800')}
      overflow="hidden"
      sx={{ '--sidebar-width': '16rem' }}
    >
      <Box
        as="nav"
        display="block"
        flex="1"
        width="var(--sidebar-width)"
        left="0"
        py="5"
        px="3"
        color="gray.200"
        position="fixed"
      >
        <Box fontSize="sm" lineHeight="tall">
          <Box
            as="a"
            href="#"
            p="3"
            display="block"
            transition="background 0.1s"
            rounded="xl"
            _hover={{ bg: 'whiteAlpha.200' }}
            whiteSpace="nowrap"
          >
            <UserInfo name="User" email="user@test.com" />
          </Box>
          <ScrollArea pt="5" pb="6">
            <SidebarLink
              display={{ base: 'block', lg: 'none' }}
              mb="2"
              icon={<BsSearch />}
            >
              Search
            </SidebarLink>
            <Stack pb="6">
              <SidebarLink icon={<BsFillInboxFill />}>
                Activity Feed
              </SidebarLink>
              <SidebarLink icon={<BsFillBookmarksFill />}>
                Bookmarks
              </SidebarLink>
              <SidebarLink icon={<BsPencilSquare />}>Notifications</SidebarLink>
            </Stack>
            {/* <Stack pb="6">
              <NavSectionTitle>Chats</NavSectionTitle>
              <SidebarLink>🎉 Inbox</SidebarLink>
              <SidebarLink>👍 Personal</SidebarLink>
              <SidebarLink>🦋 Work</SidebarLink>
            </Stack> */}
            <Stack>
              <NavSectionTitle>Wallets</NavSectionTitle>
              {data.users.map((user, index) => (
                <SidebarLink
                  key={index}
                  avatar={
                    <Avatar size="xs" name={user.name} src={user.image} />
                  }
                >
                  {user.name}
                </SidebarLink>
              ))}
            </Stack>
          </ScrollArea>
        </Box>
      </Box>
      <Box
        flex="1"
        p={{ base: '0', md: '6' }}
        marginStart={{ md: 'var(--sidebar-width)' }}
        position="relative"
        left={isOpen ? 'var(--sidebar-width)' : '0'}
        transition="left 0.2s"
      >
        <Box
          maxW="2560px"
          bg={mode('white', 'gray.700')}
          height="100%"
          pb="6"
          rounded={{ md: 'lg' }}
        >
          <Flex direction="column" height="full">
            <Flex
              w="full"
              py="4"
              justify="space-between"
              align="center"
              px="10"
            >
              <Flex align="center" minH="8">
                <MobileMenuButton onClick={toggle} isOpen={isOpen} />
                <NavBreadcrumb />
              </Flex>
              <SearchInput />
            </Flex>
            <Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
              <Heading size="md" fontWeight="extrabold" mb="6">
                Activity Feed
              </Heading>
              <Box
                flex="1"
                borderWidth="3px"
                borderStyle="dashed"
                rounded="xl"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
