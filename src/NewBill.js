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
            name: '', surnames: '', vehicle: '', amount:'', billStatus:''
        });

    }

    render(){
        return(
            <tr>
                <td><input className="from-control" name="name" value={this.state.name} onChange={this.changeBill}/></td>
                <td><input className="from-control" name="surnames" value={this.state.surnames} onChange={this.changeBill}/></td>
                <td><input className="from-control" name="vehicle" value={this.state.vehicle} onChange={this.changeBill}/></td>
                <td><input className="from-control" name="amount" value={this.state.amount} onChange={this.changeBill}/></td>
                <td><input className="from-control" name="billStatus" value={this.state.billStatus} onChange={this.changeBill}/></td>

                <td><button className="btn btn-primary" onClick={this.clickAdd}>Add Bill</button></td>
            </tr>
        );
    }
}

export default NewBill;