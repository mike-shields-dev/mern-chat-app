import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import Chats from './Chats';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Home } />
      <Route path="/chats" component={ Chats } />
    </div>
  );
}

export default App;
