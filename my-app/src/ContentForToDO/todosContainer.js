import {connect} from "react-redux";
import React from "react";

import {loadTodoThunkCreator} from "../Reducers/todo-reducer";
import ToDoList from "./ToDoList";

class MiddleTodoComponent extends React.Component{
    componentDidMount(){
        this.props.loadTodoThunkCreator();
    }
    render() {
        return (<ToDoList {...this.props}/>)
    }
}

function mapStateToProps(state){
    return {todoPage: state.todoPage}
}

const TodoContainer = connect(mapStateToProps, {loadTodoThunkCreator}) (MiddleTodoComponent)

export default TodoContainer;