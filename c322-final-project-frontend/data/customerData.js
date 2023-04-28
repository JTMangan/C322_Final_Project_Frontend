let hostname = "https://c322finalprojectbackend-production-ee31.up.railway.app/";

let findAllCustomers = () => {
 return fetch(hostname + '/customers')
        .then(x => x.json());
};

let saveCustomer = (customer) => {
    return fetch(hostname + "/customers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: customer.name,
            kids: customer.kids,
            numberOfKids: customer.numberOfKids,
            numberOfPeople: customer.numberOfPeople
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let findByTableId = (tableId) => {
    return fetch(hostname + '/customers/' + tableId)
        .then(x => x.json())
}

let customerData = {
    customers: findAllCustomers,
    saveCustomer: saveCustomer,
    customer: findByTableId
};

export default customerData;