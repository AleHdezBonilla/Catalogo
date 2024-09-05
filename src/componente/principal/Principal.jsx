import { Formulario } from '../Formulario/Formulario'
import './Principal.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


export function Principal() {

    const agregadoCarrito = () => {
        alert("¡Agregado a tu carrito!");
      }

  return (
    <body>
        <h1 style={{ color: "red" }}>Ofertas especiales</h1>
        <div class="container">
            <div class="row-cols-sm-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="https://i.ibb.co/XCNWQHD/principal.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">Zapatos caballero cuero color cafe</h5>
                            <p class="card-text">$ 3,599.00</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="#" class="btn btn-primary">Detalles</a>
                                </div>
                                <a href="#" class="btn btn-success" onClick={agregadoCarrito}>Agregar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-cols-sm-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="https://i.pinimg.com/originals/23/1f/55/231f55c1abd0c552aecebbdf5e037bf6.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">Zapatos dama azules</h5>
                            <p class="card-text">$ 599.00</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="#" class="btn btn-primary">Detalles</a>
                                </div>
                                <a href="#" class="btn btn-success" onClick={agregadoCarrito}>Agregar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        </body>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Principal/>);
 