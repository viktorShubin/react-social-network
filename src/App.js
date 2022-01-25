import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

const App = () => {
  return (
    <div className="app-wrapper">

        <Header/>
        <Sidebar/>
        <Content/>

    </div>
  );
}






export default App;

