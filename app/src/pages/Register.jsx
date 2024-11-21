function Register() {
    return (
      <div>
        <h1>Registro</h1>
        <form>
          <label>
            Nombre de Usuario:
            <input type="text" placeholder="Nombre" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" placeholder="Email" />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" placeholder="Contraseña" />
          </label>
          <br />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
  
  export default Register;