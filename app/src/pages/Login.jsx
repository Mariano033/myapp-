function Login() {
    return (
      <div>
        <h1>Iniciar Sesión</h1>
        <form>
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
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  }
  
  export default Login;