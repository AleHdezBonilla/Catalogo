import React from 'react'

export const Usuario = () => {
  return (
    <div className="contenedorUser">
    <h1>Perfil de usuario</h1>
    <form  id="formulario">
   
      <ul>
       
    
          <input type="text" class="form-control" id="nombre" name="fullname" maxlength="30" size="30" placeholder="(nombre)" required="required" autofocus="autofocus" />
          <label for="nombre" class="propiedad">Nombre</label>
       
        <input type="hidden" class="form-control" id="codigo" name="code" value="25" />
  
      

          <input type="password" class="form-control" id="password" name="password" size="30" placeholder="(contraseña)" required="required" />
          <label for="password" class="propiedad">Contraseña</label>
  
       
      
          <input type="email"  class="form-control" id="email" name="email" maxlength="30" size="30" placeholder="(email)" />
          <label for="email"  class="form-control"class="propiedad">Email</label>
  
   
       
          <input type="tel"  class="form-control" id="telefono" name="phonenumber" maxlength="9" size="11" placeholder="(teléfono)" pattern="[0-9]{9}" />
          <label for="telefono" class="propiedad">Teléfono</label>
   
        
        
          <input type="url" class="form-control" id="web" name="web" maxlength="30" size="30" placeholder="(url)" value="http://" />
          <label for="web" class="propiedad">Web personal</label>
  
       
        
          <input type="date"  class="form-control" id="fecha" name="birthdate" />
          <label for="fecha" class="propiedad">Fecha de nacimiento</label>
  
        
        <li class="fila">
          <select id="estudios" name="studies" required="required">
            <option value="">- Seleccione -</option>
            <option value="eso">ESO</option>
            <option value="bachillerato">Bachillerato</option>
            <option value="cfgm">FP grado medio</option>
            <option value="cfgs">FP grado superior</option>
            <option value="grado">Grado universitario</option>
            <option value="master">Master universitario</option>
          </select>
          <label for="estudios" class="propiedad">Nivel máximo de estudios</label>
        </li>
      
        <li class="fila">
          <select id="idiomas" name="languages" size="4" multiple="multiple" required="required" >
            <option value="spanish">Español</option>
            <option value="english">Inglés</option>
            <option value="french">Francés</option>
            <option value="german">Alemán</option>
          </select>
          <label for="idiomas" class="propiedad">Idiomas</label>
        </li>
     
         
          <button button class="btn btn-primary bt-lg btn-block" type="submit">Aceptar</button>
          <button button class="btn btn-danger bt-lg btn-block" type="reset">Reiniciar</button>   
       
      </ul>
      <div className='contenido'>
        <h1> Agregar Tarjeta</h1>
      <div>
    <label>
      <span>Número de tarjeta</span>
      <input type="text" class="form-control" size="20" data-culqi="card[number]" id="card[number]"/>
    </label>
   </div>

  <div>
    <label>
      <span>Código de seguridad</span>
      <input type="text" class="form-control" size="4" data-culqi="card[cvv]" id="card[cvv]"/>
    </label>
  </div>

  <div>
    <label>
      <span>Fecha expiración (MM/YYYY)</span>
      <input type="text" class="form-control" size="2" data-culqi="card[exp_month]" id="card[exp_month]"/>
    </label>
    <span>/</span>
    <input type="text" class="form-control" size="2" data-culqi="card[exp_year]" id="card[exp_year]"/>
  </div>
  <div>
          <button class="btn btn-primary bt-lg btn-block" type="submit">Agregar tarjeta</button>
          <button class="btn btn-danger bt-lg btn-block" type="reset">Eliminar tarjeta</button>   
        </div>
      </div>

<div>
<h1>Agregar direccion</h1>

<div class="form-group">
					<label for="adress">Address</label>
					<input type="text" class="form-control" id="adress" placeholder="1234 Main Street" required/>
					<div class="invalid-feedback">
						Please enter your shipping address.
					</div>
				</div>

        <div class="form-group">
					<label for="address2">Address 2
						<span class="text-muted">(Optional)</span>
					</label>
					<input type="text" class="form-control" id="adress2" placeholder="Flat No"/>
				</div>

        <div class="row">
					<div class="col-md-4 form-group">
						<label for="country">Country</label>
						<select type="text" class="form-control" id="country">
							<option value>Choose...</option>
							<option>United Kingdom</option>
						</select>
						<div class="invalid-feedback">
							Please select a valid country.
						</div>
					</div>

					<div class="col-md-4 form-group">
						<label for="city">City</label>
						<select type="text" class="form-control" id="city">
							<option value>Choose...</option>
							<option>London</option>
						</select>
						<div class="invalid-feedback">
							Please provide a valid city.
						</div>
					</div>
						
					<div class="col-md-4 form-group">
						<label for="postcode">Postcode</label>
						<select type="text" class="form-control" id="postcode">
							<option value>Choose...</option>
							<option>NW6 2LS</option>
						</select>
						<div class="invalid-feedback">
							Postcode required.
						</div>
					</div>
				</div>

        <div class="form-check">
					<input type="checkbox" class="form-check-input" id="shipping-adress"/> 
						Shipping address is the same as my billing address
					<label for="shipping-adress" class="form-check-label"></label>
				</div>
        <button class="btn btn-primary bt-lg btn-block" type="submit">Guardar direccion</button>
</div>


       
			
			
     

    </form>
  </div>

  )
}
