import {
    Box,
    Center,
    SkeletonCircle,
    SkeletonText,
    useColorModeValue
} from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';
interface IProps {
    maxWidth?: string
}

const BuildableMicroServicesCardLoading: FC<IProps> = ({maxWidth = '320px'}): ReactElement => {
    return (
        <Center py={8}>
      <Box
        _hover={{ boxShadow: 'xl', cursor: 'pointer' }}
        maxW={maxWidth}
        w={'full'}
        boxShadow='lg'
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        bg={useColorModeValue('white', 'gray.900')}
      >
        
          <Box w={'full'} align={'center'}>
          <SkeletonCircle size="60px" />
          </Box>
          <Box align={'center'}>
          <SkeletonText mt="8" noOfLines={1} w='100px' />
          <SkeletonText mt="5" noOfLines={1} />
          <SkeletonText mt="2" noOfLines={1} w='150px' />
          </Box>
      </Box>
    </Center>
    )
};

export default BuildableMicroServicesCardLoading;