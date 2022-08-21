import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Home } />
      <Route path="/chats" component={ ChatPage } />
    </div>
  );
}

export default App;
