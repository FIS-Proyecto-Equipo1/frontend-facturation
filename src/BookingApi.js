class BookingApi {
    //static API_BASE_URL = "https://fis-2020-vehicles.herokuapp.com/api/v1";
    static API_BASE_URL = "http://localhost:5002/api/v1";

    static requestHeaders(){
        return {}
    }

    //TODO: PENDIENTE VER LAS LLAMADAS DEL MICROSERVICIO DE RESERVAS E IGUAL CON LOS DATOS BANCARIOS DEL USER
    //LO SACAREMOS DEL MICROSERVICIO DE LOGIN
    
    static getDuration(){
        const headers = this.requestHeaders();
        const request = new Request(BillsApi.API_BASE_URL + "/booking/:matricula", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        })
    }
}
    export default BookingApi;