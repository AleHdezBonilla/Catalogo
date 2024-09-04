import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Formulario } from './componente/Formulario/Formulario.jsx';
import NavBar from './componente/NavBar.jsx';
import { Principal}  from './componente/principal/Principal.jsx';
import { Catalogo } from './componente/Catalogo/Catalogo.jsx';
import { Item } from './componente/Item/Item.jsx';

function App() {

  return (

    <><div class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a href="#" class="navbar-brand">
          <strong>Catalogo de Tienda Online</strong>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarHeader">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="#" class="nav-link active" element={<Principal />}>Catalogo</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" element={<Formulario />}>Contacto</a>
            </li>
          </ul>
          <a href="carrito.php" class="btn btn-primary">Carrito</a>
        </div>
      </div>
    </div>
    <div className


      Name="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/Formulario' element={<Formulario />} />
            <Route path='/Principal' element={<Principal />} />
            <Route path='/Catalogo' element={<Catalogo />} />
            <Route path='/Item' element={<Item />} />
          </Routes>
        </Router>

      </div></>
  )
}


export default App;
