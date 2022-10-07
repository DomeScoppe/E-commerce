import { useEffect, useState } from "react";
import { useGetItem } from "../utils/useGetItem";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
// import { getOneItem } from "../utils/firebaseConfig"
import {
    doc,
    getDoc,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    // console.log(typeof doc)
    const { getOneItem } = useGetItem({ db, doc, getDoc });

    // console.log()

    // console.log(getOneItem)
    useEffect(() => {
        (async () => {
            const item = await getOneItem(id);
            setProduct(item);
            console.log(item)
        })()
        // console.log(product, "product")
    }, [id])

    // console.log(id)
    // useEffect(() => {
    //     getOneItem(item => item.id === id)
    //         .then(result => { setProduct(result); console.log(result) })
    //         .catch(err => console.log(err))
    // }, [id]);

    return (
        <>
            <ItemDetail item={product} />
        </>
    );
}
export default ItemDetailContainer;