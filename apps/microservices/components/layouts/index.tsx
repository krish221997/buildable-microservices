import { HStack, Box, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Container } from 'next/app';
import { FC, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };

const Layout: FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <HStack spacing={'156px'}>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <VStack w={'100%'}>
        <Box w={'100%'}>
          <Header />
        </Box>
        <Box h="auto" w="100%" p={4}>
          {children}
        </Box>
      </VStack>
    </HStack>
  );
};

export default Layout;
