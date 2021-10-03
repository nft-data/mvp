import {
  Avatar,
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  Grid,
  useColorModeValue as mode,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import * as React from 'react';
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsPencilSquare,
} from 'react-icons/bs';
import Card from '../Card';
import { data } from './_data';
import { MobileMenuButton } from './MobileMenuButton';
import { NavBreadcrumb } from './NavBreadcrumb';
import { ScrollArea } from './ScrollArea';
import { SearchInput } from './SearchInput';
import { SidebarLink } from './SidebarLink';
import { useMobileMenuState } from './useMobileMenuState';
import { UserInfo } from './UserInfo';
import { useAddAccountDialog } from '../../context';

export default function App() {
  const { isOpen, toggle } = useMobileMenuState();
  const [addAccontDialogIsOpen, setAddAccontDialogIsOpen] =
    useAddAccountDialog();

  const assets = [
    {
      image: '',
      collection: '',
      title: 'The Showcase',
      price: '6.18 ',
      link: 'https://superrare.com/artwork-v2/the-showcase-21515',
      creator: 'waarp',
    },
    { image: '', collection: '', title: '', price: '', link: '' },
  ];

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
            {/* <SidebarLink
              display={{ base: 'block', lg: 'none' }}
              mb="2"
              icon={<BsSearch />}
            >
              Search
            </SidebarLink> */}
            <Stack pb="6">
              <SidebarLink icon={<BsFillInboxFill />} link="/feed">
                Activity Feed
              </SidebarLink>
              <SidebarLink icon={<BsFillBookmarksFill />} link="/bookmarks">
                Bookmarks
              </SidebarLink>
              <SidebarLink icon={<BsPencilSquare />} link="/notifications">
                Notifications
              </SidebarLink>
            </Stack>

            <Stack>
              <Flex justify="space-between" align="center">
                <Text
                  casing="uppercase"
                  fontSize="xs"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  paddingStart="3"
                  color="gray.400"
                >
                  Wallets
                </Text>
                <IconButton
                  variant="outline"
                  aria-label="Add account"
                  size="xs"
                  color="gray.400"
                  icon={<FiPlusCircle />}
                  onClick={() =>
                    setAddAccontDialogIsOpen(!addAccontDialogIsOpen)
                  }
                />
              </Flex>
              {data.users.map((user, index) => (
                <SidebarLink
                  key={index}
                  link={user.link}
                  avatar={
                    <Avatar
                      size="xs"
                      name={user.name}
                      src={user.image}
                      link={user.link}
                    />
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
              <Tabs isFitted>
                <TabList mb="1em">
                  <Tab>Activity</Tab>
                  <Tab>Collected</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>Activity</p>
                  </TabPanel>

                  <TabPanel>
                    <Grid
                      columns={{ base: 1, md: 3 }}
                      spacing="4"
                      // px="0.75rem"
                      overflow="scroll"
                    >
                      {assets ? (
                        assets?.map((asset, i) => (
                          <Card asset={asset} key={i} />
                        ))
                      ) : (
                        <Spinner />
                      )}
                    </Grid>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              {/* <Heading size="md" fontWeight="extrabold" mb="6">
                Activity Feed
              </Heading> */}

              {/* <Grid templateColumns="repeat(3, 1fr)" gap={6} overflow="scroll">
                <Box w="100%" h="50" bg="blue.500" onClick={} />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
                <Box w="100%" h="50" bg="blue.500" />
              </Grid> */}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
