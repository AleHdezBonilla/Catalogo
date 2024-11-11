import React from 'react'


export const Carrito = () => {

  const Eliminar = () => {
    alert("Cuenta creada!");
  }

  const Guardar = () => {
    alert("Cuenta creada!");
  }
  return (

 <div class="container mt-5 ml-0">
        <div class="row">
            <div class="col-md-10">

                <table class="table table-striped">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Nombre Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Delineador de ojos Kiss Me Heroine Make Smooth Liquid Eyeliner 01 Black</th>
                        <td><input type="number"  class="small" min="1" max="50" value="1" /></td>
                        <td>66 $</td>
                        <td><img src="https://d1flfk77wl2xk4.cloudfront.net/Assets/60/442/M_p0207244260.jpg" alt=""
                            width="100px" height="75px"/></td>
                        <td>
                        <a href="#" class="btn btn-danger" onClick={Eliminar}>Eliminar articulo</a>
                        <a href="#" class="btn btn-primary" onClick={Guardar}>Guardar articulo</a>
                    </td>
                      </tr>
                      
                      <tr>
                        <th>Set of 7: Stainless Steel Manicure Kit Rabbit With Rope Skipping - Blue & Transparent - One Siz</th>
                        <td><input type="number"  class="small" min="1" max="50" value="1" /></td>
                        <td>36 $</td>
                        <td><img src="https://d1flfk77wl2xk4.cloudfront.net/Assets/84/476/M_p0148747684.jpg" alt=""
                            width="100px" height="75px"/></td>
                        <td>
                        <a href="#" class="btn btn-danger" onClick={Eliminar}>Eliminar articulo</a>
                        <a href="#" class="btn btn-primary" onClick={Guardar}>Guardar articulo</a>
                    </td>
                      </tr>

                      <tr>
                        <th>Fiber Curly Mascara #1 pc - 10g.</th>
                        <td><input type="number"  class="small" min="1" max="50" value="1" /></td>
                        <td>16 $</td>
                        <td><img src="https://d1flfk77wl2xk4.cloudfront.net/Assets/97/037/M_p0210603797.jpg" alt=""
                            width="100px" height="75px"/></td>
                        <td>
                         <a href="#" class="btn btn-danger" onClick={Eliminar}>Eliminar articulo</a>
                         <a href="#" class="btn btn-primary" onClick={Guardar}>Guardar articulo</a>
                    </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
            <div class="col-md-2 mr-0">
                <div class="card text-center dark bg-light">
                    <div class="card-header text-danger">
                      Detalle Compra
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Total</h5>
                      <p class="card-text">350 $</p>
                      <a href="#" class="btn btn-primary">Confimar Compra</a>
                    </div>
                    <div class="card-footer text-muted">
                        Vuelva pronto
                    </div>
                  </div>
            </div>
        </div>
    </div>

  )
}
