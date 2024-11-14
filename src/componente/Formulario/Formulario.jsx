import './Formulario.css';
import React from 'react';
import ReactDOM from 'react-dom/client';



 export function Formulario(){

    const nuevoUsuario = () => {
        alert("Cuenta creada!");
      }

      const usuarioRegistrado = () => {
        alert("Bienvenido");

      }

    return(

        

      <div class="container">
      <div class="row-cols-sm-3">
          <div class="col">
              <div class="card shadow-sm">
              <p style={{ color: "blue" }}>Bienvenido llena el formulario para crear una cuenta de usuario</p>
              <input type="text" placeholder="name"/>
              <input type="password" placeholder="password"/>
              <input type="text" placeholder="email address"/>
                  <div class="card-body"> 
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                              <a href="#" class="btn btn-primary" onClick={nuevoUsuario}>Crear nueva cuenta</a>
                          </div>
                          <a href="#" class="btn btn-success"onClick={usuarioRegistrado}>Ya estas registrado?</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>

 

    )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Formulario/>);