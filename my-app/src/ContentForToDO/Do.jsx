import {Card} from "react-bootstrap";
import {faTrash, faCheck, faPen,} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {checkTaskThunkCreator, deleteTaskThunkCreator} from "../Reducers/todo-reducer";
import {titleRef, conRef, priorityRef, spisokRef} from "./CreateElemToDo"
import {id} from "./CreateElemToDo"


function priorityColor(int) {
    switch (int) {
        case 1:
            return "light"
        case 2:
            return "warning"
        case 3:
            return "danger"
    }
}


var Do = (props) => {

    const dispatch = useDispatch();
    const completeTask = () => {
        dispatch(checkTaskThunkCreator(props.ownerId, props.id))
    }
    const deleteTask = () => {
        dispatch(deleteTaskThunkCreator(props.ownerId, props.id))
    }
    const editClick = () => {
        titleRef.current.value = props.titleDo;
        conRef.current.value = props.Des;
        priorityRef.current.value = props.priority
        spisokRef.current.value = +props.idLIST
        id.id = props.id

    }


    if (props.isDone == true) {
        return (
            <Card className="me-3 ms-3 bg-success">
                <div className="d-flex">
                    <span className={"border border-0 borderLeft bg-" + priorityColor(props.priority)}/>
                    <div className="d-flex justify-content-between pl-3 pt-2 pb-2 pr-3 w-100">
                        <div>
                            <div className="d-flex">
                                <div className="ms-3 me-3 h5">{props.titleDo}</div>
                                <div className="h5">{props.dateDo}</div>
                            </div>
                            <div className="ms-3">{props.Des}</div>
                        </div>
                        <div className="me-2 mb-2 mt-2">
                            <FontAwesomeIcon icon={faCheck} className="me-1 h2"/>
                        </div>
                    </div>
                </div>
            </Card>)

    } else {
        return (

            <Card className="me-3 ms-3">
                <div className="d-flex">
                    <span className={"border border-0 borderLeft bg-" + priorityColor(props.priority)}/>
                    <div className="d-flex justify-content-between pl-3 pt-2 pb-2 pr-3 w-100">
                        <div>
                            <div className="d-flex">
                                <div className="ms-3 me-3 h5">{props.titleDo}</div>
                                <div className="h5 text-muted">{props.dateDo}</div>
                            </div>
                            <div className="ms-3">{props.Des}</div>
                        </div>
                        <div className="btn-group me-2 mb-2 mt-2">
                            <button type="button" className="btn btn-outline-success forCom" onClick={completeTask}>
                                <FontAwesomeIcon icon={faCheck} className="me-1"/>
                            </button>
                            <button type="button" id="firstWorkButton" className="btn btn-outline-warning forEDIT"
                                    data-toggle="modal"
                                    data-target="#staticBackdrop" onClick={editClick}>
                                <FontAwesomeIcon icon={faPen} className="me-1"/>
                            </button>
                            <button type="button" className="btn btn-outline-danger fordel" onClick={deleteTask}>
                                <FontAwesomeIcon icon={faTrash} className="me-1"/>
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }


}

export default Do;