import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
    const [product, setProduct] = useState({
        imageUrl: '',
        name: '',
        count: '',
        weight: ''
    })
    const {imageUrl, name, count, weight} = product;

    const history = useHistory();

    const {id} = useParams();

    useEffect(() => {
        loadProduct();
    }, [])

    const loadProduct = async () => {
        const responseData = await axios.get(`http://localhost:3000/products/${id}`)
        setProduct(responseData.data);
    }

    const onInputChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if(imageUrl && name && count && weight !== ''){
            await axios.put(`http://localhost:3000/products/${id}`, product);
            history.push('/');
        }
    }

    return(
        <div className="edit-book my-5">
            <div className="container">
                <div className="edit-book-wrapper border shadow p-5">
                    <h1 className="text-center">Edit Product:</h1>
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <div className="form-group">
                            <label>imageUrl</label>
                            <input type="text"
                                   name="imageUrl"
                                   placeholder="Change imageUrl"
                                   className="form-control"
                                   value={imageUrl}
                                   onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>name</label>
                            <input type="text"
                                   name="name"
                                   placeholder="Change name"
                                   className="form-control"
                                   value={name}
                                   onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>count</label>
                            <input type="text"
                                   name="count"
                                   placeholder="Change count"
                                   className="form-control"
                                   value={count}
                                   onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>weight</label>
                            <input type="text"
                                   name="weight"
                                   placeholder="change weight"
                                   className="form-control"
                                   value={weight}
                                   onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button className="btn btn-warning btn-lg btn-block mt-5">Edit Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;