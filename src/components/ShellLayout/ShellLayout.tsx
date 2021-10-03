import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Stack,
  Grid,
  useColorModeValue as mode,
  Spinner,
  Tabs,
  TabList,
  HStack,
  Button,
  TabPanels,
  Tab,
  TabPanel,
  DarkMode,
  Text,
} from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsPencilSquare,
} from 'react-icons/bs';
import { shortenAddress } from '../../utils';

import Card from '../Card';
import { data } from './_data';
import { MobileMenuButton } from './MobileMenuButton';
import NavBreadcrumb from './NavBreadcrumb';
import { ScrollArea } from './ScrollArea';
import { SearchInput } from './SearchInput';
import { SidebarLink } from './SidebarLink';
import { useMobileMenuState } from './useMobileMenuState';
import { useAddAccountDialog, useWalletDialog } from '../../context';
import { useWeb3React } from '@web3-react/core';
import Panel from './Panel';
import { useState, useEffect } from 'react';

export default function App() {
  const [addAccontDialogIsOpen, setAddAccontDialogIsOpen] =
    useAddAccountDialog();

  const { account, library, chainId } = useWeb3React();

  const [, setWalletDialogIsOpen] = useWalletDialog();
  const [ENSName, setENSName] = useState('');
  useEffect(() => {
    if (library && account) {
      let stale = false;
      library
        .lookupAddress(account)
        .then((name: string | null) => {
          if (!stale && typeof name === 'string') {
            if (name.length > 12) setENSName(name.substr(0, 8) + '...');
            else setENSName(name);
          }
        })
        .catch(() => {});
      return (): void => {
        stale = true;
        setENSName('');
      };
    }
  }, [library, account, chainId]);

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
          {account ? (
            <Box
              onClick={() => setWalletDialogIsOpen(true)}
              cursor="pointer"
              p="3"
              display="block"
              transition="background 0.1s"
              rounded="xl"
              _hover={{ bg: 'whiteAlpha.200' }}
              whiteSpace="nowrap"
            >
              <HStack display="inline-flex">
                <Avatar size="sm" name="User" src="" />
                <Box lineHeight="1">
                  <Text fontWeight="semibold">
                    {ENSName || (account && `${shortenAddress(account)}`)}
                  </Text>
                  <Text
                    fontSize="xs"
                    mt="1"
                    color={mode('whiteAlpha.700', 'gray.400')}
                  >
                    {/* user@test.com */}-
                  </Text>
                </Box>
              </HStack>
            </Box>
          ) : (
            <Box p="3">
              <Button
                onClick={() => setWalletDialogIsOpen(true)}
                colorScheme="purple"
              >
                Connect wallet
              </Button>
            </Box>
          )}
          <ScrollArea pt="5" pb="6">
            {/* <SidebarLink
              display={{ base: 'block', lg: 'none' }}
              mb="2"
              icon={<BsSearch />}
            >
              Search
            </SidebarLink> */}
            <Stack pb="6">
              <SidebarLink icon={<BsFillInboxFill />} link="/activity-feed">
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
                <DarkMode>
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
                </DarkMode>
              </Flex>
              {data.users.map((user, index) => (
                <SidebarLink
                  key={index}
                  link={`wallet/${user.link}`}
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
      <Panel />
    </Flex>
  );
}
