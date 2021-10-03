import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';

interface IProps {
  isOpen: boolean;
  onClose: () => any;
  header: string;
  children: JSX.Element;
  footer?: JSX.Element;
  disableClose?: boolean;
  size?: string;
  maxW?: string;
  // props: any;
}

export default function Dialog({
  isOpen,
  onClose,
  header,
  children,
  footer,
  disableClose,
  size = 'md',
  maxW = '28rem',
  ...props
}: IProps) {
  const theme = useTheme();
  const [isDesktop] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  if (!isDesktop) {
    return (
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton isDisabled={disableClose} />
            <DrawerHeader>{header}</DrawerHeader>
            <DrawerBody
              sx={{
                '::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
              }}
              {...props}
            >
              {children}
            </DrawerBody>
            {footer && <DrawerFooter>{footer}</DrawerFooter>}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={!disableClose}
      closeOnOverlayClick={!disableClose}
      size={size}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent maxW={maxW}>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton isDisabled={disableClose} />

        <ModalBody
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
          }}
          {...props}
        >
          {children}
        </ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}
