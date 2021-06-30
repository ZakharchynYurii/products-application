import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Loading from "../loading/Loading";
import ProductItem from "../product-item/ProductItem";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = async () => {
        const responseData = await axios.get(`http://localhost:3000/products`);
        setProducts(responseData.data);
        setIsLoading(false);
    }

    const onDeleteProduct = async (id) => {
        await axios.delete(`http://localhost:3000/products/${id}`)
        loadProducts();
    }

    return(
        <div className="dashboard my-5">
            <div className="container">
                <div className="dashboard-wrapper border shadow">
                    {
                        isLoading && <Loading />
                    }

                    <div>
                        {
                            products.map((product, index) => {
                                return <ProductItem product={product} key={index} index={index} onDeleteProduct={() => onDeleteProduct(product.id)}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default Dashboard;