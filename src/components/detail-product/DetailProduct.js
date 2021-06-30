import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from "axios";
import './DetailProduct.scss';

const DetailProduct = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = async () => {
        const responseData = await axios.get(`http://localhost:3000/products`);

        responseData.data.forEach(element => {
            if(element.id == id){
                setProduct(element)
            }
        })
    }

    const {imageUrl, name, count, weight} = product;

    return(
        <div className={'details-product'}>
            <h1 className={"text-center"}>{name}</h1>
            <div className={'details-product-info'}>
                <div className={"text-center"}>
                    <img src={imageUrl} className={"details-product-img"}/>
                    <p>Product count: {count}</p>
                    <p>Product weight {weight}</p>
                    <Link to={`/edit-product/${id}`}>
                        <button >Change</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;