import React from 'react';

class NewBill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', surnames: '', vehicle: '', amount:'', billStatus: ''};
        this.changeBill = this.changeBill.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    changeBill(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

    }
    
    clickAdd() {
        this.props.onAddBill(this.state);
        this.setState({
            billNumber:'',name: '', surnames: '', vehicle: '', amount:'', billStatus:''
        });

    }

    render(){
        return(
            <tr>
                <td><input className="form-control" name="billNumber" value={this.state.billNumber} onChange={this.changeBill}/></td>
                <td><input className="form-control" name="name" value={this.state.name} onChange={this.changeBill}/></td>
                <td><input className="form-control" name="surnames" value={this.state.surnames} onChange={this.changeBill}/></td>
                <td>
                <select className="form-control" name="vehicle" value={this.state.vehicle} onChange={this.changeBill}>
                    <option value="">Select vehicle</option>
                    <option value="CAR">CAR</option> 
                    <option value="MOTO">MOTO</option>
                    <option value="MOTO">BIKE</option>  
                </select>
                </td>
                <td><input className="form-control" name="amount" value={this.state.amount} onChange={this.changeBill}/></td>
                <td>
                 <select className="form-control" name="billStatus" value={this.state.billStatus} onChange={this.changeBill}>
                    <option value="">Select status</option>
                    <option value="PAID">PAID</option> 
                    <option value="UNPAID">UNPAID</option> 
                </select>
                </td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Save Bill</button></td>
                
            </tr>
        );
    }
}

export default NewBill;