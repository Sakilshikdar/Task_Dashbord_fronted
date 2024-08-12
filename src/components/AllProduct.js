import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function AllProduct() {
     const baseUrl = 'http://127.0.0.1:8000/'
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(baseUrl + `products/`);
    }, []); // Empty dependency array means the effect runs only once on mount

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false)
            })
            .catch(error => {
                setLoading(true)
                console.error('Error fetching data:', error);
            });
    }
    
    const ShowDelete = (product_id) => {
        var deleteConfirm = window.confirm("Are you sure you want to delete?");
        if (deleteConfirm) {
            fetch(baseUrl + '/product/' + product_id,
                {
                    method: 'DELETE'
                }
            )
                .then(response => {
                    if (response.status == 204) {
                        fetchData(baseUrl + '/products/');
                    }
                })
        }
    }
    

    return (
        <div className="container my-5">
            <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='mb-4 '>All Products
                </h3>
                
                    <Link to="/create" className='mb-4  btn  btn-dark text-md-end'>Create Product <i className="fa-solid fa-arrow-right px-1"></i></Link>
            </div>
            {loading && <div className="text-center">Loading...</div>}
            <div className="row ">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">Product Name: {product.name}</h5>
                                <p className="card-text">Description: {product.description}</p>
                                <p className="card-text">Price: {product.price}</p>
                                <p className="card-text">Quantity: {product.quantity}</p>
                                {localStorage.getItem('customer') || localStorage.getItem('customer_login')
                                ?
                                <Link to={`/update/${product.id}`} className="btn btn-primary me-3">Update</Link>
                                    :
                                    <Link to={`/register`} className="btn btn-primary me-3">Update</Link>}
                                <Link to={`/details/${product.id}`} className="btn btn-primary me-3">Details</Link>
                                <Link onClick={() => ShowDelete(product.id)} className="btn btn-danger btn-sm ms-1">Delete</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProduct;
