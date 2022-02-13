import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import userInfo from "./components/userInfo";

//Для того чтобы у нас заработали роутинги в проекте нужно установить "react-router-dom"
// и После обернуть нужные нам компоненты специальным тегом Route Пример ниже, так же обернуть все приложение тегом
// <BrowserRouter>"


const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Sidebar/>

                <div class="app-wrapper-content">
                    <Routes>
                        <Route path="/message/*" element={<Dialogs dialogsObj={props.dialogsObj} mess={props.mess}/>}/>
                        <Route path="/profile" element={<Content userDB={props.userDB} postItem={props.postItem}/>}/>
                    </Routes>

                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;

