import {Button, Card, Tabs, Tab} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import Do from "./Do";
import {useDispatch} from "react-redux";
import {loadNewsThunkCreator} from "../Reducers/news-reducer";
import {todoApi} from "../APi/todoApi";
import {deleteSpisokThunkCreator, loadTodoThunkCreator} from "../Reducers/todo-reducer";


var Sonnet = (props) => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteSpisokThunkCreator(props.id))
    }

    return (
        <Button type="button" className="btn btn-danger my-auto me-3" onClick={handleClick}>
            <FontAwesomeIcon icon={faTrash} className="me-1"/>
            Удалить список
        </Button>

    )
}

var UPTabs = (props) => {
    return (
        <div className="d-flex justify-content-between">
            <div className="h3 p-4">
                <p className="h3">{props.title}</p>
            </div>
            <Sonnet id={props.id}/>
        </div>
    )
}


var SpisokDel = (props) => {


    return (
        <div className="container mt-3">
            <Card>
                <Tabs justify defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    {
                        props.todoPage.todoLists.map((value) => {
                            return (
                                <Tab eventKey={value.id} title={value.name} className={"mb-3"}>
                                    <UPTabs id={value.id} title={value.name} key={value.id}/>
                                    {
                                        value.items.map((valueInItem) => {
                                            return (
                                                <Do titleDo={valueInItem.name} idLIST = {value.id} id={valueInItem.id}
                                                    isDone={valueInItem.isDone} priority={valueInItem.priority}
                                                    dateDo={(getFormattedDate(valueInItem.createDateTime))}
                                                    Des={valueInItem.description} key={valueInItem.id}
                                                    ownerId={value.ownerId}/>)
                                        })
                                    }
                                </Tab>)
                        })
                    }
                </Tabs>
            </Card>
        </div>


    )
}


function getFormattedDate(datetime) {
    let date = new Date(datetime);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return day + '.' + month + '.' + year;
}

export default SpisokDel;