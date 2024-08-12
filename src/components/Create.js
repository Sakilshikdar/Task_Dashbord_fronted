
import { useState, useEffect } from "react";
import axios from "axios";

function AddProduct() {
    const baseurl = 'http://127.0.0.1:8000/'
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





    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('quantity', productData.quantity);

        axios.post(baseurl + 'products/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(function (response) {

                if (response.status == 201) {
                    setProductData({
                        "name": '',
                        "description": '',
                        "price": '',
                        'quantity': '',
                    })
                    setErrorMsg(
                        ''
                    );
                    setSuccessMsg(response.statusText);
                    alert('Product Added Successfully');


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


    const buttonDisable = productData.name.length > 0 && productData.price.length > 0 && productData.description.length > 0 && productData.quantity.length > 0;
   
    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-9 mb-2 col-12">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Add Product
                            </h3>
                        </div>
                        <div className="card-body">
                            {successMsg && <div className="text-success mb-2">{successMsg}</div>}
                            {errorMsg && <div className="text-danger mb-2">{errorMsg}</div>}

                            <form>

                                <div className="form-group  mb-2">
                                    <label for="name">name</label>
                                    <input name="name" value={productData.name} type="text" onChange={inputHandler} className="form-control" id='name' />
                                </div>

                                <div className="form-group  mb-2">
                                    <label for="BD_Price">Price</label>
                                    <input name="price" value={productData.price} type="number" onChange={inputHandler} className="form-control" id='BD_Price' />
                                </div>


                                <div className="form-group mb-2">
                                    <label for="quantity">Quantity</label>
                                    <input name="quantity" value={productData.quantity} type="number" onChange={inputHandler} className="form-control" id='quantity' />
                                </div>

                                <div className="form-group mb-2">
                                    <label for="description">Description</label>
                                    <textarea name="description" value={productData.description} onChange={inputHandler} rows={8} className="form-control" id='description' />
                                </div>
                                {!buttonDisable && <div className="text-danger mb-2">Please fill all the fields</div>}
                                <button disabled={!buttonDisable} onClick={submitHandler} type="button" className="btn btn-primary my-3">Submit</button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default AddProduct;