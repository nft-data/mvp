import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
  Text,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { MobileNav } from './MobileNav';
import { NavLink } from './NavLink';

export default function Header() {
  return (
    <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
      <Box maxW="7xl" mx="auto" py="4" px={{ base: '6', md: '8' }}>
        <Flex as="nav" justify="space-between">
          <HStack spacing="8">
            <Flex as="a" href="#" rel="home" justify="center" align="center">
              <VisuallyHidden>NFT Data</VisuallyHidden>
              <Logo h="6" iconColor="blue.500" />
              <Text ml="1rem" fontSize="1.5rem" fontWeight="500">
                NFT Data
              </Text>
            </Flex>
            <HStack display={{ base: 'none', lg: 'flex' }} spacing="8">
              <NavLink.Desktop active>Product</NavLink.Desktop>
              <NavLink.Desktop>Pricing</NavLink.Desktop>
              <NavLink.Desktop>Resources</NavLink.Desktop>
              <NavLink.Desktop>Help</NavLink.Desktop>
            </HStack>
          </HStack>
          <Flex align="center">
            <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
              <NavLink.Desktop>Log in </NavLink.Desktop>
              <Button colorScheme="blue" rounded="full">
                Create account
              </Button>
            </HStack>
            <Box ml="5">
              <MobileNav />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
