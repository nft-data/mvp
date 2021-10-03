import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';

import { useDetailsDialog } from '../../../context';

export default function AssetDetails() {
  const [assetDetailsIsOpen, setAssetDetailsIsOpen] = useDetailsDialog();

  return (
    <Modal
      isOpen={assetDetailsIsOpen}
      onClose={() => setAssetDetailsIsOpen(!assetDetailsIsOpen)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
