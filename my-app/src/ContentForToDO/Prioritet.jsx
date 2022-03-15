import {Card} from "react-bootstrap";


function Prioritet() {
    return (
        <div className="container mt-3">
            <Card>
                <Card.Body>
                    <h5 className="card-title">Приоритеты элементов в ToDo:</h5>
                    <div className="d-flex">
                        <Card className="d-flex me-1 h6 p-1">
                            <span className="my-auto">ОБЫЧНЫЙ</span>
                        </Card>
                        <Card className="d-flex me-1 bg-warning h6 p-1">
                            <span className="my-auto">ВАЖНЫЙ</span>
                        </Card>
                        <Card className="d-flex bg-danger h6 text-light p-1">
                            <span className="my-auto">КРИТИЧНЫЙ</span>
                        </Card>
                    </div>
                </Card.Body>
            </Card>
        </div>

            
    )
}

export default Prioritet;