import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route exact path="*" element={<Main />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
