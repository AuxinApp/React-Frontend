import Authenticate from './Authenticate.js'
import Post from './Post.js'
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import logo from "./media/logo.png"
import LoginButton from "./LoginButton.js"

function App() {
  return (
    <div className="App">
      <br/>
      <img src={logo} alt="logo"></img>
      <br/><br/>
      <Tabs defaultActiveKey="authenticate" id="uncontrolled-tab-example" pressed>
        <Tab eventKey="authenticate" title="Authenticate">
          <Authenticate/>
        </Tab>
        <Tab eventKey="post" title="Post">
          <Post/>
        </Tab>
        {/* <Tab eventKey="contact" title="Contact">
        
        </Tab> */}
      </Tabs>
      
    </div>
  );
}

export default App;
