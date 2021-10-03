import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Dialogs from './Dialogs';
// import Header from './Header';
import ShellLayout from './ShellLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <ShellLayout />
      <Dialogs />
    </Box>
  );
}
