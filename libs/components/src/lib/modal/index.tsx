import { Button } from '@chakra-ui/button';
import { CloseIcon } from '@chakra-ui/icons';
import { Box, Center, Divider, Heading, Text } from '@chakra-ui/layout';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import React, { FC, ReactElement } from 'react';

interface IProps {
  heading: string;
  subHeading?: string;
  render?: () => any;
  onClose: () => void;
  isOpen: boolean;
  onSubmit?: (submittedRecord: any) => void;
  buttonText: string;
  isProcessing?: boolean;
  processingMessage?: string;
  colorMode?: 'dark' | 'light';
}

const BuildableModal: FC<IProps> = ({
  heading,
  subHeading,
  render,
  onClose,
  onSubmit,
  isOpen,
  buttonText,
  isProcessing,
  processingMessage,
  colorMode,
}): ReactElement => {
  const bg = colorMode === 'dark' ? 'gray.700' : 'white';
  const textColor = colorMode === 'dark' ? 'white' : 'grey-4';
  const handleClick = (value: any) => {
    onSubmit && onSubmit(value);
  };
  return (
    <Modal  isOpen={isOpen} onClose={onClose}>
      <ModalOverlay  />
      <ModalContent bg={bg}>
        <Box p={5} d={'flex'} alignItems={'center'}>
          <Box w={'100%'}>
            <Center>
              <Heading size={'xs'}>{heading}</Heading>
            </Center>
          </Box>
          <CloseIcon cursor={'pointer'} onClick={onClose} w={2} h={2} />
        </Box>
        <Divider />
        <ModalBody>
          <Box p={5} alignItems={'center'}>
            {subHeading ? (
              <Text size={'sm'} textAlign={'center'} color={textColor}>
                {subHeading}
              </Text>
            ) : (
              render && render()
            )}
            <Button
              onClick={() => handleClick(heading)}
              isLoading={isProcessing ? true : false}
              loadingText={processingMessage}
              mt={5}
              py={6}
              minW={'100%'}
              colorScheme={'blue'}
            >
              {buttonText}
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BuildableModal;
