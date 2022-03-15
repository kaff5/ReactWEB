import Prioritet from "./Prioritet";
import CreateSpisok from "./CreateSpisok";
import CreateElemToDo from "./CreateElemToDo";
import SpisokDel from "./SpisokDel";

function ToDoList(props) {
    return (
        <div>     
            <Prioritet/>
            <CreateSpisok/>
            <CreateElemToDo todoPage={props.todoPage}/>
            <SpisokDel todoPage={props.todoPage}/>
        </div>

    )
}

export default ToDoList;