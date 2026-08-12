import axios from 'axios'
import { useState, useEffect } from 'react'
import './Product.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState('')
    const [editId, setEditId] = useState(null)

    const api = 'https://fakestoreapi.com/products'

    useEffect(() => {
        axios.get(api)
        .then(res => {
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    
    const addProduct = () => {
        axios.post(api, { title })
        .then(res => {
            setProducts([...products, res.data])
            setTitle('')
        })
        .catch(err => {     
            console.log(err)
        })
    }

    const startEdit = (product) => {
        setEditId(product.id)
        setTitle(product.title)
    }

    const updateProduct = () => {
        if (!editId) return

        axios.put(`${api}/${editId}`, { title })
            .then(res => {
                setProducts(products.map(product => product.id === editId ? res.data : product))
                setTitle('')
                setEditId(null)
            })
            .catch(err => console.log(err))
    }

    // const manualUpdateProduct = (product) => {
    //     axios.put(`${api}/${product.id}`, { title : "Updated Title" })
    //         .then(res => {
    //             setProducts(products.map(item => item.id === product.id ? res.data : item))
    //             setTitle('')
    //             setEditId(null)
    //         })
    //         .catch(err => console.log(err))
    // }
    
    const deleteProduct = (id) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return

        axios.delete(`${api}/${id}`)
            .then(res => {
                setProducts(products.filter(product => product.id !== id))
            })
            .catch(err => console.log(err))
    }

  return (
    <div className="product-page">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map(prod => (
          <div key={prod.id} className="product-card" onClick={() => startEdit(prod)}>
            <h2>{prod.title}</h2>
            {/* <div className="product-image-wrapper">
              <img src={prod.image} alt={prod.title} className="product-image" />
            </div> 
             <p className="product-price">${prod.price.toFixed(2)}</p> */}
            <button onClick={() => deleteProduct(prod.id)}>Delete</button>
          </div>
        ))}
      </div><br />


     <div>
       <input type="text" placeholder='Enter Product title' value={title} onChange={e => setTitle(e.target.value)} />

        {editId ? (
          <button onClick={updateProduct}>Update product</button>
        ) : (
          <button onClick={addProduct}>Add product</button>
        )}
     </div>
    </div>
  )
}

export default Products