import React, {Component} from 'react';

class AddTodos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: ''
         };
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        });
    }
    HandleSubmit= (e) => {
        e.preventDefault();
        this.props.newTodosProps(this.state);
        this.setState({
            content: ''
        }); // reset the state after passing value in props. This will help to clear the input value after submit (it show the value of state.content)
    }
    render() {
        return (
        <div className="addTodo">
            <form onSubmit={this.HandleSubmit} >
                <input type="text" placeholder="Add your todo here" onChange={this.handleChange} value={this.state.content} />
            </form>
        </div>
            
        );
    }
}

export default AddTodos;