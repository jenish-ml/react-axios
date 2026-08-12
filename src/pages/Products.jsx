import axios from 'axios'
import { useState, useEffect } from 'react'
import './Product.css'

const Products = () => {
    const [product, setProduct] = useState([])
    const [title, setTitle] = useState('')

    const api = 'https://fakestoreapi.com/products'

    useEffect(() => {
        axios.get(api)
        .then(res => {
            setProduct(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    
    const addProduct = () => {
        axios.post(api, {
            title: title
            
        })
        .then(res => {
            setProduct([...product, res.data]),
            setTitle('')
        })
        .catch(err => {     
            console.log(err)
        })
    }
    console.log(product);
    
  return (
    <div className="product-page">
      <h1>Product List</h1>

      <input type="text" placeholder='Enter Product title' value={title} onChange={e => setTitle(e.target.value)} />

      <button onClick={addProduct}>Add product</button>

      <div className="product-grid">
        {product.map(prod => (
          <div key={prod.id} className="product-card">
            <h2>{prod.title}</h2>
            {/* <div className="product-image-wrapper">
              <img src={prod.image} alt={prod.title} className="product-image" />
            </div> */}
            {/* <p className="product-price">${prod.price.toFixed(2)}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products