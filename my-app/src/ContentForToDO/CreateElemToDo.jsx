import {Button, Card, Form} from "react-bootstrap";
import React from "react";
import {useDispatch} from "react-redux";
import {createToDoItemThunkCreator} from "../Reducers/todo-reducer";

export const titleRef = React.createRef()
export const conRef = React.createRef()
export const priorityRef = React.createRef()
export const spisokRef = React.createRef()
export const id = {
    id: null
}


function CreateElemToDo(props) {
    const dispatch = useDispatch();
    const HandleSubmit = (e) =>{
        
        e.preventDefault();
        dispatch(createToDoItemThunkCreator(id.id,titleRef.current.value,conRef.current.value,+priorityRef.current.value,spisokRef.current.value))
    }
    
    function clearButton() {
        id.id = null;
    }
    
    
    return (
        <div className="container mt-3">
            <Form onSubmit={HandleSubmit}>
                <Card>
                    <Card.Header>
                        <Card.Text className="my-auto p-2">СОЗДАТЬ ЭЛЕМЕНТ TODO</Card.Text>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-2">
                            <Form.Label>Заголовок</Form.Label>
                            <Form.Control required ref={titleRef}/>
                        </Form.Group>


                        <div className="d-flex">
                            <div className="w-50 me-5">
                                <Card.Text className="my-auto mt-4 mb-2">Приоритет</Card.Text>
                                <Form.Select aria-label="Default select example" ref = {priorityRef}>
                                    <option value="1">Обычный</option>
                                    <option value="2">Важный</option>
                                    <option value="3">Критический</option>
                                </Form.Select>
                            </div>
                            <div className="w-50">
                                <Card.Text className="my-auto mt-4 mb-2">Список</Card.Text>
                                <Form.Select aria-label="Default select example" ref={spisokRef}>
                                    {
                                        props.todoPage.todoLists.map((value) => {
                                            return (
                                                <option value={value.id} key = {value.id}>{value.name}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </div>
                        </div>
                        <Form.Group className="mt-4">
                            <Form.Label>Описание</Form.Label>
                            <Form.Control as="textarea" required ref={conRef}/>
                        </Form.Group>


                    </Card.Body>
                    <Card.Header className="p-2 ps-3">
                        <div className="d-flex">
                            <Button className="me-2" variant="secondary" type="reset" onClick={clearButton}>Отмена</Button>{' '}
                            <Button variant="success" type="submit">Создать</Button>{' '}
                        </div>
                    </Card.Header>
                </Card>
            </Form>
        </div>
    )
}

export default CreateElemToDo;