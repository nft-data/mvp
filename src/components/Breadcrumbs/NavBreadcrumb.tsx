import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HiChevronRight } from 'react-icons/hi';

export default function NavBreadcrumb({ page }: { page: any }) {
  return (
    <Breadcrumb
      fontSize="sm"
      separator={
        <Box
          as={HiChevronRight}
          color="gray.400"
          fontSize="md"
          top="2px"
          pos="relative"
        />
      }
    >
      <BreadcrumbItem color="inherit">
        <BreadcrumbLink>Welcome</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem color="inherit" isCurrentPage>
        <BreadcrumbLink>{page}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
