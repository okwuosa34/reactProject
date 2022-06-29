import './App.css';
import Header from './Header';
// Running on Router v5.2 in order to use switch component 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CouplesCards from './components/CouplesCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <CouplesCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
      

export default App;
