class BillsApi {
    //static API_BASE_URL = "https://fis-2020-bills.herokuapp.com/api/v1";
    static API_BASE_URL = "http://localhost:5002/api/v1";

    static requestHeaders(){
        return {}
    }

    static getAllVehicles(){
        const headers = this.requestHeaders();
        const request = new Request(BillsApi.API_BASE_URL + "/bills", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        })
    }
    
    static postBill(bill){
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        return fetch(BillsApi.API_BASE_URL + "/bills", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                billNumber: bill.billNumber,
                name: bill.name,
                surnames: bill.surnames,
                vehicle: bill.vehicle,
                amount: bill.amount,
                status: bill.status    
            })}).then(response => {
            console.log(response);
            return response.json();
        });
    }
    static updateBill(bill){
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        console.log(bill);
        return fetch(BillsApi.API_BASE_URL + "/bills/" + bill.billNumber, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                billNumber: bill.billNumber,
                name: bill.name,
                surnames: bill.surnames,
                vehicle: bill.vehicle,
                amount: bill.amount,
                status: bill.status  

        })}).then(response => {
            console.log(response);
            return response.json();
        });
    }
}

export default BillsApi;