import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Chatbox from './Components/Chatbox';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/chatbox" element={<Chatbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;