import {Button, Card, Form} from "react-bootstrap";
import React from "react";
import {createSpisokThunkCreator} from "../Reducers/todo-reducer";
import {useDispatch} from "react-redux";

const titleRef = React.createRef()



function CreateSpisok() {
    const dispatch = useDispatch();
    
    function HandleSubmit(e) {

        e.preventDefault();
        dispatch(createSpisokThunkCreator(titleRef))
    }
    
    
    
    return (
        <div className="container mt-3">
            <Form onSubmit={HandleSubmit}>
                <Card>
                    <Card.Header>
                        <p className="my-auto p-2">СОЗДАТЬ СПИСОК TODO</p>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Название</Form.Label>
                            <Form.Control required ref={titleRef}/>
                        </Form.Group>

                    </Card.Body>
                    <Card.Header className="p-2 ps-3">
                        <div className="d-flex">
                            <Button className="me-2" variant="secondary" type="reset">Отмена</Button>{' '}
                            <Button variant="success" type="submit">Создать</Button>{' '}
                        </div>
                    </Card.Header>
                </Card>
            </Form>
        </div>
    )
}

export default CreateSpisok;