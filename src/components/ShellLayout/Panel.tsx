import {
  Box,
  Flex,
  Grid,
  useColorModeValue as mode,
  Spinner,
  Tabs,
  TabList,
  Button,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from '@chakra-ui/react';
import { SearchInput } from './SearchInput';
import Card from '../Card';
import SignIn from './SignIn';
import { MobileMenuButton } from './MobileMenuButton';
import { NavBreadcrumb } from './NavBreadcrumb';
import { useMobileMenuState } from './useMobileMenuState';
import { useWeb3React } from '@web3-react/core';
import { useWalletDialog } from '../../context';

export default function Panel() {
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

  const { isOpen, toggle } = useMobileMenuState();
  const { account } = useWeb3React();
  const [, setWalletDialogIsOpen] = useWalletDialog();

  return (
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
        {account ? (
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
              {/* <Tabs isFitted>
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
              </Tabs> */}
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
        ) : (
          //   <Button
          //     onClick={() => setWalletDialogIsOpen(true)}
          //     colorScheme="purple"
          //   >
          //     Connect wallet
          //   </Button>
          <SignIn />
        )}
      </Box>
    </Box>
  );
}
