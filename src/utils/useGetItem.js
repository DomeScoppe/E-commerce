

export const useGetItem = ({ db, getDoc, doc }) => {
    const getOneItem = async (id) => {
        const docRef = await doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const item = {
                id: docSnap.id,
                ...docSnap.data()
            }
            console.log(item)
            return item;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    };
    return { getOneItem }
}

