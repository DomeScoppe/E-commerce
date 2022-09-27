import { useEffect, useState } from "react";
import itemCall  from "../utils/itemCall"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const { itemData } = require("../utils/itemData")

const ItemDetailContainer = ()=>
{
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() =>
    {
        itemCall(itemData.find(item => item.id === id))
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [id]);

    return(
        <>
            <ItemDetail item={product} />
        </>
    );
}
export default ItemDetailContainer;