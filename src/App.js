
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './components/Login';
import { Menu } from './components/Menu';
import { Registrar} from './components/RegistrarDepartamento'
import './App.css'; 
function App() {
  return (
    <div className="App  vh-100" >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/menu' element={<Menu/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
