import itemCall  from "../utils/itemCall"
import Item from "./Item";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const { itemData } = require("../utils/itemData");

const ItemList = () =>
{
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() =>
    {
        if(id)
        {
            itemCall(itemData.filter(item => item.categoryId === id))
                .then(result => setProduct(result))
                .catch(err => console.log(err))    
        }
        else
        {
            itemCall(itemData)
                .then(result => setProduct(result))
                .catch(err => console.log(err))
        }
    }, [id])

    return(
        <>
            {  
            product.map(item =>
            (  
                <Item 
                    key = {item.id}
                    id = {item.id}
                    name = {item.name}
                    stock = {item.stock}
                    cost = {item.cost}
                    description = {item.description}
                    imgPath = {item.img}
                />
            ))
            }
        </>
    );
}
export default ItemList;