import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { RiAddFill, RiArrowRightUpLine } from 'react-icons/ri';
import { useAddAccountDialog } from '../../context';

export const TableActions = () => {
  const [, setAddAcountDialogIsOpen] = useAddAccountDialog();
  return (
    <Stack
      spacing="4"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
    >
      <HStack>
        <FormControl minW={{ md: '320px' }} id="search">
          <InputGroup size="sm">
            <FormLabel srOnly>Filter by name or wallet</FormLabel>
            <InputLeftElement pointerEvents="none" color="gray.400">
              <BsSearch />
            </InputLeftElement>
            <Input
              rounded="base"
              type="search"
              placeholder="Filter by name or wallet..."
            />
          </InputGroup>
        </FormControl>
        <Select rounded="base" size="sm" placeholder="Sort">
          <option>Most recent</option>
        </Select>
      </HStack>
      <Button
        size="sm"
        variant="outline"
        iconSpacing="1"
        leftIcon={<RiAddFill fontSize="1.25em" />}
        onClick={() => setAddAcountDialogIsOpen(true)}
      >
        New account
      </Button>
    </Stack>
  );
};
