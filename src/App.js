import Authenticate from "./pages/authenticate/Authenticate";
import Post from "./pages/post/Post";
import SnippingPage from "./pages/snippingPage/SnippingPage";
import Home from "./pages/home/Home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import logo from "./media/logo.png";
import LoginButton from "./LoginButton.js";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <div className='contentWrapper'>
      <SideNav></SideNav>
      <Switch>
        <Route path="/Authenticate" component={Authenticate} />
        <Route path="/Post" component={Post} />
        <Route path="/Snipping" component={SnippingPage} />
        <Route path="/*" component={Home} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
