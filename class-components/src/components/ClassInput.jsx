import { Component } from 'react';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDeletion(event){
    event.preventDefault()
    if(event.target.className === 'delete'){
      this.setState((state) => ({
        todos: state.todos.filter((todo) => todo !== event.target.value)
      }));
    }
    if(event.target.className === 'edit'){
      console.log("edit found")
      let toBeEdited = this.state.todos.filter((todo) => todo === event.target.value )
      console.log(toBeEdited)
    }



  }



  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul onClick={this.handleDeletion}>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}<button value={todo} className='delete'>Delete</button><button className='edit' value={todo}>Edit</button></li>
          ))}
          <span>Number todos: {this.state.todos.length}</span>
        </ul>
      </section>
    );
  }
}

export default ClassInput;
