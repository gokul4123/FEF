import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, {Toaster}from 'react-hot-toast'
import './Product.css'

const Product = () => {

    const [product, setProduct] = useState({
        name: 'Royal Enfield Bullet',
        price: 230000,
        description: 'Appropriate Bike for a Rider',
      });
    
      function updateProduct () {
        
        const newProduct={
          name: 'Himalayan',
          price: 400000,
          description: 'The Royal Enfield Himalayan. Unleash your Inner Rider',
        };
        setProduct(newProduct);
        validateProps(newProduct);
        
        
      };
  return (
    <div>
      <ProductDetails product={product} updateProduct={updateProduct} />
      <Toaster/>
    </div>
  );
}

function validateProps(product)
{
    if (typeof product.name !== 'string') {
        toast.error('proptype Error: Product name must be a string!');
      }
      else if (typeof product.price !== 'number') {
        toast.error('proptype Error: Product price must be a number!');
      }
      else if (typeof product.description !== 'string') {
        toast.error('proptype Error: Product description must be a string!');
      }
      else{
        toast.success('Updated Successfully')
      }
}

const ProductDetails = ({ product, updateProduct }) => {

    
    return (
      <div className='layer'>
        <p>{product.name}</p>
        <p>Price: Rs.{product.price}</p>
        <p>{product.description}</p>

        <button onClick={updateProduct} className='button-1' >Update Product</button>
      </div>
    )
  }
  ProductDetails.propTypes = {
      product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      updateProduct: PropTypes.func.isRequired,
    };
  



export default Product;