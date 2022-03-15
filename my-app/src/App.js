import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBarApp from "./NavbarApp";
import ToDoList from "./ContentForToDO/ToDoList";
import Footer from "./Footer"; 
import NotFound from "./NotFound";
import NewsContainer from "./ContentForNews/newsContainer";
import TodoContainer from "./ContentForToDO/todosContainer";

function App() {
  return (
    <BrowserRouter>
        <NavBarApp/>
        <Routes>
            <Route exact path = "/" element={<NewsContainer/>}/>
            <Route path="/todos" element={<TodoContainer/>}/>
            <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


export default App;
