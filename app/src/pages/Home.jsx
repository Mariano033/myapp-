import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <p>Explora nuestros productos.</p>
      <Link to="/register">Regístrate</Link> | <Link to="/login">Inicia Sesión</Link>
    </div>
  );
}

export default Home;
