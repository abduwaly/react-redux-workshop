import React, {Component} from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
        }
    }

    render() {


        return (
            <div>
                {
                    this.state.list.map( (item,index) => <li key={index}>{item}</li>)
                }
            </div>
        )
    }

}

export default TodoList;