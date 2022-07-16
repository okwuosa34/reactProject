import './App.css';
import Header from './Header';
// Running on Router v5.2 in order to use switch component 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CouplesCards from './components/CouplesCards';
import FeatureButtons from './components/FeatureButtons';
import Messages from './components/Messages';
import DirectMessages from './components/DirectMessages';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <DirectMessages />
          </Route>
          <Route path="/chat">
            <Header backButton="/main" />
            <Messages />
          </Route>
          <Route path="/main">
            <Header />
            <CouplesCards />
            <FeatureButtons />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
      

export default App;
