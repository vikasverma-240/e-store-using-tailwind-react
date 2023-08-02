import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../components/Products';

const CategoriesProduct = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if (products.length === 0) return <div>Loading products...</div>;

  return (
    <div>
      <Products products={products}/>
    </div>
  );
};

export default CategoriesProduct;
