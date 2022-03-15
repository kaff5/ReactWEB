import {Carousel} from "react-bootstrap";

function Slider()
{
    return(
        <div class="container mt-3">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/start.png?itok=IULYkKfR"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/ezh.png?itok=fmGF8T4v"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/final.png?itok=kaDoekkt"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
 
    )
}
export default Slider;