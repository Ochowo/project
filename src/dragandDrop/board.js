import React, {Fragment} from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

const Container = styled.div`
  display: flex;
  width:100%;
  flex-wrap: wrap;
  margin-top: 2%;
`;
const Title = styled.h3`
  padding: 8px;
  text-algn:center;
`;
class App extends React.Component {
  state = initialData
  
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if(!destination){
        return;
    }
    if(
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId]

    if(start === finish) {
         const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
        
      }
    } 
  this.setState(newState)
  return;
    }
  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1)
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };

  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);

  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  };

  const newState = {
    ...this.state,
    columns: {
      ...this.state.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    },
  };
  this.setState(newState);  
};

  render(){
    return ( 
      <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {provided  => (
              <Fragment>
      <h2>Drag and drop</h2>
        <Container
          {...provided.droppableProps}
          ref={provided}
        >
        {this.state.columnOrder.map(columnId => {
          const column  = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
        </Container>  
        </Fragment>  
        )}
          </Droppable>
      
      </DragDropContext>
    );
  }

}
export default App;