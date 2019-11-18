import React, {Fragment} from 'react';
import axios from 'axios';
import './todo.css';

class Todo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          todos: [],
          show: false,
          title: '',
        }
      }
      componentDidMount() {
        this.getTodos()
      }
      getTodos() {
        const config = {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
            },
          };
        axios.get('https://cors-anywhere.herokuapp.com/https://todo09.herokuapp.com/api/v1/todos', config)
        .then(response => {
          this.setState({todos: response.data})
        })
        .catch(error => console.log(error))
      }
      handleChange(e) {
        const value  = e.target.value;
        const name = e.target.name;
        console.log(value);
        this.setState({ [name]: value });
    
      }
    
      onSubmit = (e) => {
        console.log(this.state.title, 'jjjj')
        e.preventDefault();
        console.log('hhh')
          axios.post('https://cors-anywhere.herokuapp.com/https://todo09.herokuapp.com/api/v1/todos', {title: this.state.title})
        .then(response =>  {
          return window.location.reload(false)
        })
          .catch(error => console.log(error))      
            
      }
      
showModal(e){
    e.preventDefault();
    this.setState({
        show:true,
    })
}
      render(){
          if(this.state.show === true){
return(
  <div className="body">
    <div className="main-container">
   <form onSubmit={e => this.onSubmit(e)}>
   <div className="todocomp" >Task Title</div>
   <textarea  className="todoarea" rows="10" name="title" cols="100" onChange={e => this.handleChange(e)}>

</textarea>

       <button className="btn2">Create</button>
   </form>

</div>
</div>
)
          }
        return (
          <div className="body">
            <div className="main-container">
    <h1>To do list</h1>
    <button className="btn2" onClick={e => this.showModal(e)}>
        <div className="create" >+ Create a task</div>
        </button>
    <ul className="todolist">
    {this.state.todos.map((todo) => {
		    return(
                <Fragment>
        <li><h3 className="todoheader">{todo.created_at}</h3><article>{todo.title}</article></li> 

           </Fragment> 
           )
            })}
    </ul>
</div>
</div>
        )
      }
}

export default Todo;













