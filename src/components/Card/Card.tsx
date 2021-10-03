import { Box, Flex, Img, Text, useColorModeValue } from '@chakra-ui/react';

// import { EthLogo } from '../Assets/EthLogo';
// import HeartToggler from './HeartToggler';

export default function Card({
  listing,
  handleClick,
}: {
  listing: any;
  handleClick: any;
}) {
  const {
    title,
    price,
    attributes,
    image,
    ethPrice,
    size,
    world,
    lastSale,
    coordinates,
    isProfile,
  } = listing;

  var lightTextColor = useColorModeValue('purple', 'white');
  var darkTextColor = useColorModeValue('gray.600', 'white');
  var blueTextColor = useColorModeValue('blue', 'white');

  //   const attList = attributes.map((attribute, index) => {
  //     if (attribute.name === 'area') return null;
  //     return (
  //       <Text key={index} fontWeight="300" color={lightTextColor}>
  //         {attribute.value + (/^\d+$/.test(attribute.value) ? 'm' : '')}{' '}
  //         <Box as="span" color={darkTextColor}>
  //           {attribute.name.replace('Distance to', 'from')}
  //         </Box>
  //       </Text>
  //     );
  //   });

  return (
    <Flex
      direction="column"
      rounded="md"
      position="relative"
      flexDirection="column"
      justifyContent="flex-start"
      shadow={{ md: 'base' }}
      transform="translateY(0)"
      transition="transform .2s ease-in-out,box-shadow .2s ease-in-out"
      _hover={{
        cursor: 'pointer',
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 20px 0 rgba(0,0,0,.24)',
      }}
    >
      <Flex
        direction="column"
        overflow="hidden"
        whiteSpace="nowrap"
        onClick={() => handleClick()}
      >
        <Img
          src={image}
          alt={`${image}`}
          borderTopRadius="md"
          htmlWidth="100%"
        />

        <Box p="0.75rem">
          <Box
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            float="right"
          >
            <Box marginBottom="50%" minHeight="50px">
              <Text fontWeight="bold" color={darkTextColor} align="right">
                {price ? 'Price' : ''}
              </Text>
              {/* {price ? EthLogo : ''} */}
              <Text align="right" fontWeight="bold" display="inline">
                {price ? ethPrice : ''}
              </Text>
            </Box>
            {lastSale ? (
              <Box verticalAlign="bottom">
                <Text fontWeight="300" color={darkTextColor} align="right">
                  Last
                </Text>
                <Text align="right">
                  {/* {EthLogo} */}
                  {lastSale.toFixed(2)}
                </Text>
              </Box>
            ) : null}
          </Box>
          <Text
            fontWeight="300"
            minWidth="100%"
            color={blueTextColor}
            fontSize="0,75rem"
          >
            <Box
              as="span"
              display="inline-block"
              height="10px"
              width="10px"
              backgroundColor={price ? 'green.400' : 'yellow.400'}
              borderRadius="50%"
              marginBottom="1.5px"
              marginRight="0.5rem"
            ></Box>
            {world}
          </Text>
          <Flex justify="space-between" align="center">
            <Text
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              fontWeight="600"
              fontSize="1rem"
              maxW="50%"
              align="left"
            >
              {title}
              {isProfile ? null : (
                <Text fontWeight="300" color={lightTextColor}>
                  {size ? size : 256}m<sup>2</sup>
                </Text>
              )}
            </Text>
          </Flex>
          {/* <Box justify="space-between" align="left" mt="0.5rem">
            {attList}
          </Box> */}
        </Box>
      </Flex>
    </Flex>
  );
}
