import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, VStack } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { FC } from 'react';

interface IProps {
  onClose: () => void;
  isOpen: boolean;
  variant: string;
}

const SidebarContent = () => (
  <VStack>
    <Image src={'/images/buildableLogo.svg'}/>
  </VStack>
);

const Sidebar: FC<IProps> = ({ variant, isOpen, onClose }) => {
  const bgColor = useColorModeValue('rgb(245 249 250)', 'gray.700');
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="156px"
      top={0}
      h="100%"
      bgColor={bgColor}
    >
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
