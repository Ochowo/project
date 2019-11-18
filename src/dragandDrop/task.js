import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  height:50px;
 
  `;
export default class Task extends React.Component {
  render(){
    const divStyle = {
      backgroundColor:this.props.task.color
    }
    console.log(divStyle)
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <div style={divStyle}>
          <Container 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
          </Container> </div>
        )}
        
      </Draggable>
    )
  }
}