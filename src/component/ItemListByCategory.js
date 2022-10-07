import Item from "./Item";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// const { itemData } = require("../utils/itemData");
import { firestoreFetch } from "../utils/firebaseConfig";



const ItemListByCategory = () => {
    // console.log(id)
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        // console.log(product)
        firestoreFetch(id)
            .then(result => setProduct(result))

        console.log(product)
    }, [])

    return (
        <>
            {
                product.filter(item => item.categoryId === id).map(item =>
                (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        stock={item.stock}
                        cost={item.cost}
                        description={item.description}
                        imgPath={item.img}
                    />
                ))
            }
        </>
    );
}
export default ItemListByCategory;