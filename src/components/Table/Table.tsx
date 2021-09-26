import { Box, Heading } from '@chakra-ui/react';
import { TableActions } from './TableActions';
import { TableContent } from './TableContent';
import { TablePagination } from './TablePagination';

export default function Table() {
  return (
    <Box as="section" py="12">
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <Box overflowX="auto">
          <Heading size="lg" mb="6">
            Activity
          </Heading>
          <TableActions />
          <TableContent />
          <TablePagination />
        </Box>
      </Box>
    </Box>
  );
}
