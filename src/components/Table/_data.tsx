import { Badge, Box, Img, Stack } from '@chakra-ui/react';

interface UserProps {
  data: {
    image: string;
    item: string;
    project: string;
  };
}

const Asset = (props: UserProps) => {
  const { image, item, project } = props.data;
  return (
    <Stack direction="row" spacing="4" align="center">
      <Box flexShrink={0} h="10" w="10">
        <Img
          objectFit="cover"
          htmlWidth="160px"
          htmlHeight="160px"
          w="10"
          h="10"
          rounded="full"
          src={image}
          alt=""
        />
      </Box>
      <Box>
        <Box fontSize="sm" fontWeight="medium">
          {item}
        </Box>
        <Box fontSize="sm" color="gray.500">
          {project}
        </Box>
      </Box>
    </Stack>
  );
};

export const data = [
  {
    account: 'Soby',
    status: 'bought',
    earned: '$45,000',
    chain: 'ETH',
    asset: {
      image: 'https://d2ekshiy7r5vl7.cloudfront.net/163000007.png',
      item: 'Meridian #548',
      project: 'Art Blocks Playground',
    },
  },
  {
    account: 'Comfygang',
    status: 'transfer',
    earned: '$4,840',
    chain: 'XYZ',
    asset: {
      image: 'https://d2ekshiy7r5vl7.cloudfront.net/163000007.png',
      item: 'Meridian #548',
      project: 'Art Blocks Playground',
    },
  },
  {
    account: 'Trill',
    status: 'sold',
    earned: '$89,054',
    chain: 'SOL',
    asset: {
      image: 'https://d2ekshiy7r5vl7.cloudfront.net/163000007.png',
      item: 'Meridian #548',
      project: 'Art Blocks Playground',
    },
  },
  {
    account: 'PixelVault',
    status: 'bought',
    earned: '$19,954',
    chain: 'ETH',
    asset: {
      image: 'https://d2ekshiy7r5vl7.cloudfront.net/163000007.png',
      item: 'Meridian #548',
      project: 'Art Blocks Playground',
    },
  },
];

const badgeEnum: Record<string, string> = {
  bought: 'green',
  transfer: 'orange',
  sold: 'red',
};

export const columns = [
  {
    Header: 'Asset',
    accessor: 'asset',
    Cell: function MemberCell(data: any) {
      return <Asset data={data} />;
    },
  },
  {
    Header: 'Account',
    accessor: 'account',
  },
  {
    Header: 'Chain',
    accessor: 'chain',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: function StatusCell(data: any) {
      return (
        <Badge fontSize="xs" colorScheme={badgeEnum[data]}>
          {data}
        </Badge>
      );
    },
  },
  {
    Header: 'Unit price',
    accessor: 'earned',
  },
];
