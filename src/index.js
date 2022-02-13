import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Данные о пользователе
const userDB = {
    'name': 'Viktor',
    'lastName': 'Shubin',
    'city': 'Angarsk',
    'work': 'Programmer'
}


//Данные о постах
const postItem = [
    {id: 1, PostText: 'Привет бро'},
    {id: 2, PostText: 'ОО нихуя у тебя кто-то оставил запись'},
    {id: 3, PostText: 'Вау мне нравится эта соцсеть'},
    {id: 4, PostText: 'Лучшая соцсеть в мире'},
    {id: 5, PostText: 'Что бы еще сказать чтоб не спиздеть то'},
    {id: 6, PostText: 'Мы с томарой ходим парой'},
]

//перенос данных о диалогах и сообщениях

let dialogsObj = [
    {id: 1, name: 'Viktor'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Senya'},
]

const mess = [
    {id: 1, messageText: 'Алжа хелоу'},
    {id: 2, messageText: 'Алжа не мороси'},
    {id: 3, messageText: 'Алжа ду ю вонт'},
    {id: 4, messageText: 'Алжа лох'},
    {id: 5, messageText: 'Алжа го мани'},
    {id: 6, messageText: 'Алжа хелоу'},
]


//в компоненте app мы передаем данные пропсом на этаж ниже и так далее до самого нижнего этажа
ReactDOM.render(
    <React.StrictMode>
        <App postItem={postItem} userDB={userDB} dialogsObj={dialogsObj} mess={mess}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export default postItem