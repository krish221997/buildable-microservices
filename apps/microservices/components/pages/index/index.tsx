import { Box, Center, StackDivider, VStack, Wrap, WrapItem } from '@chakra-ui/layout';
import { Container } from 'next/app';
import { FC } from 'react';
import servicesData from '../../../public/data/services.json';
import {BuildableMicroServicesCard}  from '@buildable-microservices/components';
import ServicesCardGrid from '../../elements/ServicesCardGrid';
import ServicesTable from '../../elements/ServicesTable';

const IndexPage: FC = () => {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={10} align={'stretch'} w={'100%'} >
        <ServicesTable/>
        <ServicesCardGrid/>
    </VStack>
  );
};

export default IndexPage;
