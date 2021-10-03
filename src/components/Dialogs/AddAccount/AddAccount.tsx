import {
  useDisclosure,
  Modal,
  Button,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  ModalContent,
  FormLabel,
  Input,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';

import { useRef } from 'react';
import { useAddAccountDialog } from '../../../context';

export default function AddAccount() {
  const [addAcountDialogIsOpen, setAddAcountDialogIsOpen] =
    useAddAccountDialog();
  console.log('addAcountDialogIsOpen:', addAcountDialogIsOpen);

  const initialRef = useRef<any>();

  function addAccount() {
    setAddAcountDialogIsOpen(!addAcountDialogIsOpen);
  }

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={addAcountDialogIsOpen}
      onClose={() => setAddAcountDialogIsOpen(!addAcountDialogIsOpen)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Account name</FormLabel>
            <Input ref={initialRef} placeholder="Account name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Wallet address</FormLabel>
            <Input placeholder="Wallet address" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => setAddAcountDialogIsOpen(!addAcountDialogIsOpen)}
            mr={3}
          >
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={() => addAccount()}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
