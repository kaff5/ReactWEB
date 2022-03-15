import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addLikeThunkCreator} from "../Reducers/news-reducer";
import img1 from "../imagesNews/Crew-2.png";



var NewsElem = (props) => {

        const dispatch = useDispatch(); 
        const handleClick = () => {
            dispatch(addLikeThunkCreator(props.id))
        }
    return (
        <div className="container mt-2">
            <Card>
                <Card.Header>
                        <div className="d-flex justify-content-between">
                            <p className="my-auto h5">{props.title}</p>
                            <p className="text-muted my-auto news-date ms-2">{props.tags}</p>
                        </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                <img src={img1} className={"rounded container p-0"}></img>
                </Card.Body>
                <Card.Header className="p-1 ps-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex text">
                            <p className="my-auto fw-bold">Date: </p>
                            <p className="text-muted my-auto news-date ms-2">{getFormattedDate(props.date)}</p>
                        </div>
                        <div className="d-flex">
                            <p className="my-auto font-italic news-likes">{props.likes}</p>
                            <Button className="outline-* border-0" variant="light" onClick={handleClick}>❤</Button>
                        </div>
                    </div>
                </Card.Header>
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

export default NewsElem;