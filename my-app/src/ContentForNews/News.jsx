import Slider from "./Slider";
import Zagolovok from "./Zagolovok";
import NewsElem from "./NewsElem";

function News(props) {
    return (
        <div>
            <Slider/>
            <Zagolovok/>
            <div>
                {
                    props.newsPage.news.map((value => {
                        return <NewsElem title={value.title} content = {value.content} tags = {value.tags} date = {value.date} likes = {value.serviceInfo.likes} id = {value.id} key={value.id} />
                    }))
                }
            </div>
        </div>
        
    )
}

export default News;