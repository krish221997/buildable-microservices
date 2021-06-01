import { Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IProps {
  columns: any[];
}

const BuildableTableHead: FC<IProps> = ({ columns }) => {
  const headerBgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Thead bg={headerBgColor}>
      <Tr>
        {columns.map((column) => {
          return <Th key={column.key}>{column.title}</Th>;
        })}
      </Tr>
    </Thead>
  );
};

export default BuildableTableHead;
