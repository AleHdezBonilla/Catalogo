import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Formulario } from './componente/Formulario/Formulario.jsx';
import NavBar from './componente/NavBar.jsx';
import { Principal}  from './componente/principal/Principal.jsx';
import { Catalogo } from './componente/Catalogo/Catalogo.jsx';
import { Item } from './componente/Item/Item.jsx';

function App() {

  return (
    <div className="App">

     
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/Formulario' element={<Formulario/>}/>
          <Route path='/Principal' element={<Principal/>}/>
          <Route path='/Catalogo' element={<Catalogo/>}/>
          <Route path='/Item' element={<Item/>}/>
        </Routes>
      </Router>
  
   </div> 
  )
}


export default App;
