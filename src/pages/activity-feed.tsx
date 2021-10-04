import { Flex, Heading } from '@chakra-ui/react';
import SearchInput from '../components/Input/Search';
import NavBreadcrumb from '../components/Breadcrumbs/NavBreadcrumb';
import { MobileMenuButton } from '../components/Layout/MobileMenuButton';
import { useMobileMenuState } from '../components/Layout/useMobileMenuState';
import Table from '../components/Table';

export default function Feed() {
  const { isOpen, toggle } = useMobileMenuState();

  return (
    <Flex direction="column" height="full">
      <Flex w="full" py="4" justify="space-between" align="center" px="10">
        <Flex align="center" minH="8">
          <MobileMenuButton onClick={toggle} isOpen={isOpen} />
          <NavBreadcrumb page={'Activity Feed'} />
        </Flex>
        <SearchInput />
      </Flex>
      <Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
        <Heading size="lg" fontWeight="extrabold">
          Activity Feed
        </Heading>
        <Table />
      </Flex>
    </Flex>
  );
}
