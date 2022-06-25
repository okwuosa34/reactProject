import './App.css';
import Header from './Header';
// Running on Router v5.2 in order to use switch component 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CouplesCards from './components/CouplesCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chat page</h1>
          </Route>
          <Route path="/">
            <CouplesCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
      
      {/*  Cards  */}
      {/*  Buttons below cards  */}

      {/*  Chats screen  */}
      {/*  Individual chat screen  */}

export default App;
