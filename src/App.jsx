import React from 'react';
import { Product } from './componentes/Card';
import './App.css';
import banner from './assets/bg-cafe.jpg';
import res from './json/responser.json'; // Importa tus datos o usa una API
import { useState, useEffect } from 'react';

function App() {
  // Estado para almacenar todos los productos
  const [products, setProducts] = useState([]);

  // Estado para almacenar los productos después de aplicar filtros
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Estado para el botón de filtro seleccionado
  const [pressedButton, setPressedButton] = useState('all');

  // Función para filtrar productos según el tipo de filtro
  const filterProducts = (filterType) => {
    if (filterType === 'available' && pressedButton !== 'available') {
      // Filtra productos disponibles
      const availableProducts = products.filter((product) => product.available);
      setPressedButton('available');
      setFilteredProducts(availableProducts);
    } else if (filterType === 'all' && pressedButton !== 'all') {
      // Muestra todos los productos
      setPressedButton('all');
      setFilteredProducts(products);
    }
  };

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    // Cargar datos desde la fuente (API, archivo JSON, etc.)
    // En este caso, usamos datos estáticos desde el archivo responser.json
    setProducts(res);
    setFilteredProducts(res); // Inicialmente, muestra todos los productos
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <>
      {/* Encabezado con imagen de fondo */}
      <header className='header'>
        <img className='header-img' src={banner} alt="Banner"></img>
      </header>

      {/* Contenedor principal de la aplicación */}
      <div className="card-container">
        {/* Sección de título y descripción */}
        <div className='card-title'>
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
            expertly roasted in small batches and shipped fresh weekly.
          </p>
          
          {/* Botones de filtro */}
          <div className='card-title-btn'>
            <button
              onClick={() => filterProducts('all')}
              className={pressedButton === 'all' ? 'pressed' : 'unpressed'}
            >
              All Products
            </button>
            <button
              onClick={() => filterProducts('available')}
              className={pressedButton === 'available' ? 'pressed' : 'unpressed'}
            >
              Available Now
            </button>
          </div>
        </div>

        {/* Sección de productos */}
        <div className='card-products'>
          <Product products={filteredProducts}></Product>
        </div>
      </div>
    </>
  );
}

export default App;
