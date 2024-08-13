import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from './../logo.svg';


function Details() {
    const baseUrl = 'https://dashboard-backend-jfha.onrender.com/'
    const [productData, setProductData] = useState({});
    const {product_id} = useParams(); 

    useEffect(() => {
        fetchData(baseUrl + '/product/' + product_id)
    }, []);


    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProductData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    
  return (
    <div className="container">
           <div className="card w-50 my-4 mx-auto">
                <div className="row no-gutters p-4 shadow">
                    <div className="col-md-4">
                        <img src={logo} className="card-img" alt={productData.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Product Name: {productData.name}</h5>
                            <p className="card-text">Description: {productData.description}</p>
                            <p className="card-text">Price: {productData.price}</p>
                            <p className="card-text">Quantity: {productData.quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}   
export default Details;