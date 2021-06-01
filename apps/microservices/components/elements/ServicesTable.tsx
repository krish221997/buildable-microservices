import { FC } from 'react';
import { BuildableTable } from '@buildable-microservices/components';
import TableData from '../../public/data/table.json';
import { Box, Heading, VStack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '10%',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: '10%',
  },
  {
    title: 'Cluster',
    dataIndex: 'cluster',
    key: 'cluster',
    width: '10%',
  },
  {
    title: 'Cloud Provider',
    dataIndex: 'cloud-provider',
    key: 'cloud-provider',
    width: '10%',
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
    width: '10%',
  },
  {
    title: 'Tier',
    dataIndex: 'tier',
    key: 'tier',
    width: '10%',
  },
  {
    title: 'Host',
    dataIndex: 'host',
    key: 'host',
    width: '10%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: '10%',
  },
];

const ServicesTable: FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  return (
    <VStack mt={5} rounded={'md'} boxShadow={'lg'}>
      <Box alignSelf={'center'} bgColor={bgColor} p={4} w={'100%'} h={'50px'}>
        <Heading size={'sm'}>Active now</Heading>
      </Box>
      <BuildableTable variant={'striped'} columns={columns} data={TableData} />
    </VStack>
  );
};

export default ServicesTable;
