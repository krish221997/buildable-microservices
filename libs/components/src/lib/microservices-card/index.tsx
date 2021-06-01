import {
  Badge,
  Box,
  Center,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

interface IProps {
  image?: string;
  heading?: string;
  subHeading?: string;
  isDisabled?: boolean;
  badgeContent?: string;
  onEvent?: (selectedCard: any) => void;
  maxWidth?: string;
  badgePlacement?: 'start' | 'end';
}

const BuildableMicroServicesCard: FC<IProps> = ({
  image,
  heading,
  subHeading,
  isDisabled,
  badgeContent,
  badgePlacement,
  onEvent,
  maxWidth = '320px',
}): ReactElement => {
  const handleClick = (value: any) => {
    onEvent && onEvent(value);
  };

  return (
    <Center py={8}>
      <Box
        _hover={{ boxShadow: 'xl', cursor: 'pointer' }}
        onClick={() => handleClick({ image, heading, subHeading })}
        maxW={maxWidth}
        w={'full'}
        boxShadow='lg'
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        bg={
          isDisabled
            ? useColorModeValue('disabled-grey', 'gray.900')
            : useColorModeValue('white', 'gray.900')
        }
      >
        {badgeContent && (
          <Box w={'full'} align={badgePlacement}>
            <Badge
              rounded={'xl'}
              py={1}
              px={2}
              textTransform={'capitalize'}
              colorScheme={'green'}
            >
              {badgeContent}
            </Badge>
          </Box>
        )}
        {image && (
          <Box w={'full'} align={'center'}>
            <Image src={image} w={'60px'} borderRadius={'full'} />
          </Box>
        )}
        {heading && (
          <Heading
            color={useColorModeValue('black', 'white')}
            mt={8}
            fontSize={'md'}
          >
            {heading}
          </Heading>
        )}
        {subHeading && (
          <Text
            fontSize={'sm'}
            color={useColorModeValue('black', 'white')}
            mt={5}
          >
            {subHeading}
          </Text>
        )}
      </Box>
    </Center>
  );
};

export default BuildableMicroServicesCard;
