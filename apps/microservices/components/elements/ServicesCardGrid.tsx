import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/layout';
import { FC } from 'react';
import {useColorModeValue } from '@chakra-ui/color-mode';
import ControlledServicesCardGrid from '../controlled/ControlledServicesCardGrid';

const ServicesCardGrid: FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  return (
    <VStack rounded={'md'} boxShadow={'lg'}>
      <Box alignSelf={'center'} bgColor={bgColor} p={4} w={'100%'} h={'50px'}>
        <Heading size={'sm'}>Add additional microservices</Heading>
      </Box>
      <SimpleGrid
        minChildWidth={{ sm: '260px', md: '320px' }}
        p={5}
        w="100%"
        justify={'center'}
        spacing={'12px'}
      >
        <ControlledServicesCardGrid/>
      </SimpleGrid>
    </VStack>
  );
};

export default ServicesCardGrid;
