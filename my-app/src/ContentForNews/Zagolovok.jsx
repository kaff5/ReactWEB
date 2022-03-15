import {Alert} from "react-bootstrap";

function Zagolovok()
{
    return(
        <div className="container">
            <div className="text-center mt-4 h1">Новости</div>
            <Alert className= "text-center" variant="primary">
                Даный раздел является статическим, новости не подгружаются с сервера!
            </Alert>
        </div>

    )
}
export default Zagolovok;
