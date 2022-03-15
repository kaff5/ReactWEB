import {Alert} from "react-bootstrap";



function NotFound() {
    return (
        <div className="container mt-3 forFooter">
            <Alert className= "text-center" variant="danger">
                Страничка не найдена
            </Alert>
        </div>

    )
}

export default NotFound;