import {
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
  useToast,
} from '@chakra-ui/react';
import { useWallets } from '../../../context/data';

import { useRef, useState } from 'react';
import { useAddAccountDialog } from '../../../context/layout';

export default function AddAccount() {
  const [addAcountDialogIsOpen, setAddAcountDialogIsOpen] =
    useAddAccountDialog();
  const [wallets, setWallets] = useWallets();
  const toast = useToast();
  const [newWallet, setNewWallet] = useState({
    name: '',
    address: '',
  });

  const initialRef = useRef<any>();

  function addAccount() {
    try {
      setWallets([...wallets, newWallet]);
      toast({
        title: 'Wallet added',
        description: 'Now tracking wallet activity',
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'success',
        isClosable: true,
      });
      setAddAcountDialogIsOpen(!addAcountDialogIsOpen);
    } catch (error: any) {
      toast({
        title: 'Failed to add wallet',
        description: 'Please try again',
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'error',
        isClosable: true,
      });
    }
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
            <Input
              ref={initialRef}
              placeholder="Account name"
              onChange={(e) =>
                setNewWallet({ ...newWallet, name: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Wallet address</FormLabel>
            <Input
              placeholder="Wallet address"
              onChange={(e) =>
                setNewWallet({ ...newWallet, address: e.target.value })
              }
            />
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
