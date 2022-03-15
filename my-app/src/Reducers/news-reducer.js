import {newsApi} from "../APi/newsApi";


const LOAD_NEWS = "LOAD_NEWS";

let initialState = {
    news: []
}

export const newsReducer = (state = initialState,action) => {
  let newsState = {...state};
  
  switch (action.type) {
      case LOAD_NEWS:
          newsState.news = action.news;
          return newsState;
      default:
          return newsState;
  }
}


export function loadNewsActionCreator(news)
{
    return {type: LOAD_NEWS,news: news}
}


export function loadNewsThunkCreator()
{
    return (dispatch) =>
    {
        newsApi.getNews().then(data => {
            dispatch(loadNewsActionCreator(data))
        })
    }
}
export function addLikeThunkCreator(id)
{
    return (dispatch) =>
    {
        newsApi.addLike(id).then(data => {
            dispatch(loadNewsThunkCreator())
        })
    }
}



