import React from 'react'

export const Usuario = () => {
  return (
    <div class="contenedor">
    <h1>Perfil de usuario</h1>
    <form  id="formulario">
   
      <ul>
        <li class="fila">
    
          <input type="text" id="nombre" name="fullname" maxlength="30" size="30" placeholder="(nombre)" required="required" autofocus="autofocus" />
          <label for="nombre" class="propiedad">Nombre</label>
       
        <input type="hidden" id="codigo" name="code" value="25" />
        </li>
      
        <li class="fila">
          <input type="password" id="password" name="password" size="30" placeholder="(contraseña)" required="required" />
          <label for="password" class="propiedad">Contraseña</label>
        </li>
       
        <li class="fila">
          <input type="email" id="email" name="email" maxlength="30" size="30" placeholder="(email)" />
          <label for="email" class="propiedad">Email</label>
        </li>
        
        <li class="fila">
          <input type="tel" id="telefono" name="phonenumber" maxlength="9" size="11" placeholder="(teléfono)" pattern="[0-9]{9}" />
          <label for="telefono" class="propiedad">Teléfono</label>
        </li>
        
        <li class="fila">
          <input type="url" id="web" name="web" maxlength="30" size="30" placeholder="(url)" value="http://" />
          <label for="web" class="propiedad">Web personal</label>
        </li>
       
        <li class="fila">
          <input type="date" id="fecha" name="birthdate" />
          <label for="fecha" class="propiedad">Fecha de nacimiento</label>
        </li>
       
        <li class="fila">
          <input type="number" id="edad" name="age" class="small" value="18" readonly="readonly" disabled="disabled" />
          <label for="edad" class="propiedad">Edad</label>
        </li>
      
        <li class="fila">
          <input type="number" id="hermanos" name="siblings" class="small" min="1" max="50" value="1" />
          <label for="hermanos" class="propiedad">Nº de hermanos</label>
        </li>
        
        <li class="fila">
          <input type="range" id="salario" name="earnings" min="600" max="2000" step="200" value="1000" list="valores-salario" onchange="document.querySelector('#salario-output').value = value;"/>
          <label for="salario" class="propiedad">Salario</label>
          <output for="salario" id="salario-output">1000</output>
          <datalist id="valores-salario">
	          <option>600</option>
	          <option>800</option>
            <option>1000</option>
            <option>1200</option>
            <option>1400</option>
            <option>1600</option>
            <option>1800</option>
            <option>2000</option>
          </datalist>
        </li>
     
        <li class="fila">
          <input type="color" id="color" value="#FF0000" onchange="document.querySelector('#color-output').value = value;" />
          <label for="color" class="propiedad">Color preferido</label>
          <output for="color" id="color-output">#FF0000</output>
        </li>
    
        <li class="fila">
          <input type="checkbox" id="premium" name="premium" checked="checked" />
          <label for="premium" class="propiedad">Usuario Premium</label>
        </li>
        
        <li class="fila">
          <input type="radio" id="hombre" name="genre" value="hombre" />
          <label for="hombre" class="de-radio">Hombre</label>
          <input type="radio" id="mujer" name="genre" value="mujer" checked="checked" />
          <label for="mujer" class="de-radio">Mujer</label>
          <label for="genero" class="propiedad">Género</label>
        </li>
     
     
      
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
     
        <li class="fila botonera">
          <button type="submit">Aceptar</button>
          <button type="reset">Reiniciar</button>   
        </li>
      </ul>
      <div>
        <h1> Agregar Tarjeta</h1>

        <div>
      <label>
      <span>Correo electrónico</span>
      <input type="text" size="20" data-culqi="card[email]" id="card[email]"/>
    </label>
      </div>
      <div>
    <label>
      <span>Número de tarjeta</span>
      <input type="text" size="20" data-culqi="card[number]" id="card[number]"/>
    </label>
  </div>
  <div>
    <label>
      <span>Código de seguridad</span>
      <input type="text" size="4" data-culqi="card[cvv]" id="card[cvv]"/>
    </label>
  </div>

  <div>
    <label>
      <span>Fecha expiración (MM/YYYY)</span>
      <input type="text" size="2" data-culqi="card[exp_month]" id="card[exp_month]"/>
    </label>
    <span>/</span>
    <input type="text" size="4" data-culqi="card[exp_year]" id="card[exp_year]"/>
  </div>
  <button  type="button" id="buyButton">Guardar datos bancarios</button>
      </div>
    </form>
  </div>

  )
}
