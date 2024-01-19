import React from "react";
import '../styles.css/Card.css'
import prod from '../assets/Star_fill.svg'
import prodNo from '../assets/Star.svg'

// Componente que muestra la lista de productos.
const ListProduct = ({ products }) => {
  return (
    <div className="container-api">
      {products.map((product) => (
        // Card principal.
        <div key={product.id} className={`card ${!product.available ? 'sold-out' : ''}`}>
          <div className="card-tag-img">
            <img src={product.image} alt={product.name} />
            {/* Muestra el texto "Popular" si el producto es popular. */}
            {product.popular && <div className="texto-popular">Popular</div>}
          </div>
          <div className="card-details">
            <p>{product.name}</p>
            <div className="card-price">
              <p>{product.price}</p>
            </div>
          </div>
          <div className="card-votes-container">
            {/* Muestra la información de votos y rating si está disponible. */}
            {product.rating !== null && product.votes !== 0 ? (
              <div className="card-votes">
                <img src={prod} alt="Star" />
                <p>{product.rating} </p>
                <p>({product.votes} votes)</p>
              </div>
            ) : (
              // Si no hay rating, muestra un mensaje.
              <div className="card-votes">
                <img src={prodNo} alt="Star" />
                <p>No rating</p>
              </div>
            )}
            {/* Muestra un mensaje si el producto no está disponible. */}
            {!product.available && (
              <div className="card-sold">
                <p>Sold out</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Componente que muestra un mensaje cuando no hay productos
const NoListApi = () => {
  return (
    <p>No hay lista</p>
  );
}

// Componente principal para mostrar la lista de productos
const Product = ({ products }) => {
  // Verifica si hay productos disponibles
  const hasProduct = products?.length > 0;

  return (
    hasProduct ?
      <ListProduct products={products} />
      : <NoListApi />
  );
}

// Exporta el componente Product
export { Product };
