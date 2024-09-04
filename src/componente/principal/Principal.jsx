import React from 'react'
import { Formulario } from '../Formulario/Formulario'

export function Principal() {
  return (


    <body>
        

 
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="https://i.ibb.co/XCNWQHD/principal.jpg"/>
                        <div class="card-body">
                            <h5 class="card-title">Zapatos color cafe</h5>
                            <p class="card-text">$ 599.00</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="#" class="btn btn-primary">Detalles</a>
                                </div>
                                <a href="#" class="btn btn-success">Agregar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        </body>
  )
}

 