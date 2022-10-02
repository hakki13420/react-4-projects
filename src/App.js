import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Freecodecamp from './components/Freecodecamp';
import Counter from './components/Counter';
import Home from './components/Home';
import Calculator from './components/calculator/Calculator';
import Tasks from './components/task-crud/Tasks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/freecodecamp" element={<Freecodecamp />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/calculator' element={<Calculator />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
