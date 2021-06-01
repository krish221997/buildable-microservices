import { Tbody, Td, Tr, useColorModeValue } from '@chakra-ui/react';
import find from 'lodash/find';
import React, { FC } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

interface IProps {
  columns: any[];
  data: any[];
  onDragEnd?: (sourceIndex: number, destinationIndex: number) => void;
  isDragDisabled?: boolean;
}

const BuildableTableBody: FC<IProps> = ({
  columns,
  data,
  onDragEnd,
  isDragDisabled,
}) => {
  const cellBgColorOnHover = useColorModeValue('gray.50', 'gray.900');
  const bodyBgColor = useColorModeValue('white', 'black');

  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) {
          return false;
        }

        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;

        return onDragEnd && onDragEnd(sourceIndex, destinationIndex);
      }}
    >
      <Droppable droppableId="droppable">
        {(provided) => (
          <Tbody {...provided.droppableProps} ref={provided.innerRef} w="100%">
            {data.map((datum, index) => {
              const { key, ...rest } = datum;

              return (
                <Draggable
                  key={key}
                  draggableId={key}
                  index={index}
                  isDragDisabled={isDragDisabled}
                >
                  {(provided, snapshot) => (
                    <Tr
                      key={`tr-${datum.key}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      bg={
                        snapshot.isDragging ? cellBgColorOnHover : bodyBgColor
                      }
                    >
                      {Object.keys(rest).map((value, index) => {
                        const column = find(columns, (c) => {
                          return c.dataIndex === value;
                        });

                        if (!column?.render) {
                          return (
                            <Td
                              key={index}
                              borderBottomWidth={snapshot.isDragging ? 0 : 1}
                              width={
                                column.width
                                  ? column.width
                                  : `calc(100% / ${columns.length})`
                              }
                            >
                              {datum[value]}
                            </Td>
                          );
                        }

                        return (
                          <Td
                            key={index}
                            borderBottomWidth={snapshot.isDragging ? 0 : 1}
                            width={
                              column.width
                                ? column.width
                                : `calc(100% / ${columns.length})`
                            }
                          >
                            {column.render(datum[value])}
                          </Td>
                        );
                      })}
                    </Tr>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BuildableTableBody;
