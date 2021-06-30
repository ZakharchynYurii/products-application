import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({
        imageUrl: '',
        name: '',
        count: '',
        weight: ''
    })
    const {imageUrl, name, count, weight} = product;

    const history = useHistory();

    const onInputChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (imageUrl && name && count && weight !== '') {
            await axios.post(`http://localhost:3000/products`, product)
            history.push("/");
        }
    }

    return (
        <div className="add-product my-5">
            <div className="container">
                <div className="add-product-wrapper border shadow p-5">
                    <h1 className="text-center">Add Product:</h1>
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <div className="form-group">
                            <label>imageUrl</label>
                            <input type="text"
                                   name="imageUrl"
                                   placeholder="Enter imageUrl"
                                   className="form-control"
                                   value={imageUrl}
                                   onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>name</label>
                            <input type="text"
                                   name="name"
                                   placeholder="Enter name"
                                   className="form-control"
                                   value={name}
                                   onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>count</label>
                            <input type="text"
                                   name="count"
                                   placeholder="Enter count"
                                   className="form-control"
                                   value={count}
                                   onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>weight</label>
                            <input type="text"
                                   name="weight"
                                   placeholder="Enter weight"
                                   className="form-control"
                                   value={weight}
                                   onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button className="btn btn-primary btn-lg btn-block mt-5">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;