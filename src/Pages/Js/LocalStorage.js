const getStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        const userObj = JSON.parse(cart)
        return userObj;
    }
    return [];
}

const setStorage = (id) => {
    const getData = getStorage();
    if (getData.includes(id)) {
        return;
    } else {
        getData.push(id)
        const data = JSON.stringify(getData)
        localStorage.setItem('cart', data);
    }
}
const removeItem = (id) => {
    const getData = getStorage();
    const currentData = getData.filter(item => item !== id);
    localStorage.setItem('cart', JSON.stringify(currentData));
}
export { getStorage,setStorage, removeItem}
