import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <p>Mostrando detalles del producto con ID: {id}</p>
    </div>
  );
}

export default ProductDetail;
