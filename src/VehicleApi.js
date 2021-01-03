/*class VehicleApi {
    //static API_BASE_URL = "https://fis-2020-vehicles.herokuapp.com/api/v1";
    static API_BASE_URL = "http://localhost:5002/api/v1";

    static requestHeaders(){
        return {}
    }

    static getVehicle(){
        const headers = this.requestHeaders();
        const request = new Request(BillsApi.API_BASE_URL + "/vehicle/:matricula", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        })
    }
}
    export default VehicleApi;*/