import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './task';

const TaskList = styled.div`
  flex-grow: 1;
  min-height: 100px;
`;
const Container = styled.div`
  margin: 8px;
  flex: 1 0 10.5%;
  display: flex;
  flex-direction: column;
  }
`;
export default class Column extends React.Component {
  render(){
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
          {provided => (
             <Container
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
          <Droppable droppableId={this.props.column.id} type="task">
            
          {provided =>(
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) =><Task key={task.id} task={task} index={index}/>)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container> 
          )}
      
      </Draggable>
    );
  }
}