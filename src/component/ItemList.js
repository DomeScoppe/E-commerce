// import itemCall  from "../utils/itemCall"
import Item from "./Item";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// const { itemData } = require("../utils/itemData");
import { firestoreFetch } from "../utils/firebaseConfig";



const ItemList = () => {
    const { id } = useParams();
    // console.log(id)
    const [product, setProduct] = useState([]);
    useEffect(() => {
        // console.log(product)
        firestoreFetch(id)
            .then(result => setProduct(result))

        console.log(product)
    }, [id])

    return (
        <>
            {
                product.map(item =>
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
export default ItemList;