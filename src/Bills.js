import React from 'react';
import Bill from './Bill.js';
import Alert from './Alert.js';
import NewBill from './NewBill.js';

class Bills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            bills: this.props.bills
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addBill = this.addBill.bind(this);
    }

    handleEdit(bill) {
        this.setState({
            errorInfo: bill.name
        });
    }
    
    handleCloseError() {
        this.setState({
            errorInfo: null
        });
    }

    addBill(bill) {

        this.setState(prevState => {
            const bills = prevState.bills;
            if (! bills.find(c => c.name === bill.name)) {
                return({
                    bills: [...prevState.bills, bill]
                });
            }
            return ({
                errorInfo: 'Bill already exists'
            });
        });
    }

    render() {
        return(
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError} />
                <table class="table">
                    <thead>
                    <div class="ml-auto">
                    </div>
                        <tr>
                            <th>Name</th>
                            <th>Surnames</th>
                            <th>Vehicle</th>
                            <th>Amount</th>
                            <th>Bill status</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <NewBill onAddBill={this.addBill}/>
                    {this.state.bills.map((bill) =>
                        <Bill bill={bill} onEdit={this.handleEdit}/>
                    )}
                </table>
            </div>
        );
    }
}

export default Bills;