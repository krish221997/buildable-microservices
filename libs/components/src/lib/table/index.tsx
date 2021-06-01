import { Box, Table, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import BuildableTableBody from './body';
import BuildableTableHead from './head';

interface IProps {
  variant?: 'unstyled' | 'simple' | 'striped';
  size?: 'sm' | 'md' | 'lg';
  columns: any[];
  data: any[];
  onDragEnd?: (sourceIndex: number, destinationIndex: number) => void;
  isDraggable?: boolean;
}

const BuildableTable: FC<IProps> = ({
  variant = 'simple',
  size = 'md',
  columns,
  data,
  isDraggable = false,
  onDragEnd,
}) => {
  if (!data?.length) {
    return (
      <Box fontSize="sm" w="100%" p={2} textAlign="center">
        <Text>No data to show!</Text>
      </Box>
    );
  }

  if (!columns?.length) {
    return (
      <Box fontSize="sm" w="100%" p={2} textAlign="center">
        <Text>No columns to render!</Text>
      </Box>
    );
  }

  return (
    <Table variant={variant} size={size}>
      <BuildableTableHead columns={columns} />
      <BuildableTableBody
        columns={columns}
        data={data}
        isDragDisabled={!isDraggable}
        onDragEnd={onDragEnd}
      />
    </Table>
  );
};

export default BuildableTable;
