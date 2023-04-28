let hostname = "http://localhost:8082";

let findAllOrders = () => {
 return fetch(hostname + '/orders')
        .then(x => x.json());
};

let saveOrder = (order) => {
    return fetch(hostname + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }).then(response =>
    {
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let orderData = {
    orders: findAllOrders,
    saveOrder: saveOrder
};

export default orderData;