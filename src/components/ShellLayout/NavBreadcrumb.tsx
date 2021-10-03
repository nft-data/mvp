import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HiChevronRight } from 'react-icons/hi';

export default function NavBreadcrumb(props: BreadcrumbProps) {
  const router = useRouter();

  function convertToString(path: string) {
    let newString = path.replace(/-|\s/g, ' ');
    const capitalize = newString
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');
    return capitalize;
  }

  return (
    <Breadcrumb
      fontSize="sm"
      {...props}
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
        <BreadcrumbLink>
          {/* {router && convertToString(router.asPath.substring(1))} */}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
