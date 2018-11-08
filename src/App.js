import React, {Component} from 'react';
import TodoList from "./component/TodoList";
import AddingForm from "./component/AddingForm";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['a', 'b', 'c'],
            route: "list",
        };
        this.goToForm = this.goToForm.bind(this);
        this.goToList = this.goToList.bind(this);
    }

    goToList() {
        this.setState({route: 'list'});
    };

    goToForm() {
        this.setState({route: 'form'});
    };

    render() {

        return (
            <div>
                <div>
                    <button onClick={this.goToList}>TODO List</button>
                    <button onClick={this.goToForm}>Adding Form</button>
                </div>
                {
                    this.state.route === "list" ?
                        <TodoList list={this.state.list}/> :
                        <AddingForm/>
                }
            </div>
        );
    }

}

export default App;