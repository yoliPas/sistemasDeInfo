
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './components/Login';
import { Menu } from './components/Menu';
import { MenuPrincipal } from './components/MenuPrincipal';
import { Registrar} from './components/RegistrarDepartamento'
import {Toaster} from "sonner"

import './App.css'; 
function App() {
  return (
    <div className="App  vh-100" >
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Menu/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/menu' element={<Menu/>}/>
          
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
