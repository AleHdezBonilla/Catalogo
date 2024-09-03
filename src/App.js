import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Formulario } from './componente/Formulario/Formulario.jsx';
import NavBar from './componente/NavBar.jsx';
import { Principal}  from './componente/Principal/Principal.jsx';

function App() {

  return (
    <div className="App">

     
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/Formulario' element={<Formulario/>}/>
          <Route path='/Principal' element={<Principal/>}/>
        </Routes>
      </Router>
      <Formulario/>
   </div> 
  )
}


export default App;
