import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { columns, data } from './_data';

export const TableContent = () => {
  return (
    <Box
      overflowX="scroll"
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
      }}
      borderRadius="md"
      // border="1px solid #2F3747"
      my="8"
    >
      <Table my="8" borderWidth="1px" fontSize="sm" variant="striped">
        <Thead bg={mode('gray.50', 'gray.800')}>
          <Tr whiteSpace="nowrap">
            {columns.map((column, index) => (
              <Th whiteSpace="nowrap" scope="col" key={index}>
                {column.Header}
              </Th>
            ))}
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {columns.map((column, index) => {
                const cell = row[column.accessor as keyof typeof row];
                const element = column.Cell?.(cell) ?? cell;
                return (
                  <Td whiteSpace="nowrap" key={index}>
                    {element}
                  </Td>
                );
              })}
              <Td textAlign="right">
                <Button variant="link" colorScheme="blue">
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
