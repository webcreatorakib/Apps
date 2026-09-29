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
        console.log("Data is add")
        return;
    } else {
        getData.push(id)
        const data = JSON.stringify(getData)
        localStorage.setItem('cart', data);
    }
}
export { getStorage,setStorage }
