import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function Update() {


    const { product_id } = useParams();
    const baseurl = 'http://127.0.0.1:8000/';
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [productData, setProductData] = useState({
       
        "name": '',
        "description": '',
        "price": '',
        "quantity": '',
    });



    const inputHandler = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });

    }
   
    useEffect(() => {
        fetchProductData(baseurl + `product/` + product_id);
    }, []);



   
    function fetchProductData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setProductData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('quantity', productData.quantity);
       
        axios.patch(baseurl + 'product/' + product_id + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(function (response) {
                if (response.status == 200) {
                    setErrorMsg(
                        ''
                    );
                    setSuccessMsg(response.statusText);
                    alert('Product Updated');

                }
                else {
                    setSuccessMsg('');
                    setErrorMsg(response.statusText);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 mb-2 col-12">
                    <div className="card-header">

                        <h3 className="mb-4">
                            Update Product
                        </h3>
                    </div>
                    <div className="card-body">
                        {successMsg && <div className="text-success o mb-2">{successMsg} . Product Updated</div>}
                        {errorMsg && <div className="text-danger mb-2">{errorMsg}</div>}

                        <form>
                            <div className="form-group  mb-2">
                                <label for="name">name</label>
                                <input name="name" value={productData.name} type="text" onChange={inputHandler} className="form-control" id='name' />
                            </div>
                            <div className="form-group  mb-2">
                                <label for="BD_Price">Price</label>
                                <input name="price" value={productData.price} type="text" onChange={inputHandler} className="form-control" id='BD_Price' />
                            </div>
                            <div className="form-group  mb-2">
                                <label for="BD_Price">Quantity</label>
                                <input name="quantity" value={productData.quantity} type="number" onChange={inputHandler} className="form-control" id='BD_Price' />
                            </div>
                            <div className="form-group mb-2">
                                <label for="description">Description</label>
                                <textarea  name="description" value={productData.description} onChange={inputHandler} rows={8} className="form-control" id='description' />
                            </div>

                            <button onClick={submitHandler} type="button" className="btn btn-primary my-3">Submit</button>
                        </form>


                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Update;