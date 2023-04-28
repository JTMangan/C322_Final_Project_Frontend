let hostname = "http://localhost:8083";

let findAllInvoices = () => {
 return fetch(hostname + '/invoices')
        .then(x => x.json());
};

let saveInvoice = (invoice) => {
    return fetch(hostname + "/invoices", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
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

let invoiceData = {
    invoices: findAllInvoices,
    saveInvoice: saveInvoice
};

export default invoiceData;