import React from 'react';
import Bill from './Bill.js';
import Alert from './Alert.js';
import NewBill from './NewBill.js';
import EditBill from './EditBill.js';


class Bills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            bills: this.props.bills,
            isEditing: {}
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addBill = this.addBill.bind(this);
    }

    handleEdit(bill) {
        this.setState(prevState => ({
             isEditing: {...prevState.isEditing, [Bill.billStatus]: bill}
        }));
    }

    handleDelete(bill) {
        this.setState(prevState => ({
            bills: prevState.bills.filter((c) => c.billNumber !== bill.billNumber)
        }))
    }
    handleCancel(billStatus, bill) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[billStatus];
            return {
                isEditing: isEditing
            }
        })
    }

    handleChange(billStatus, bill) {
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [billStatus]: bill}
        }))
    }

    handleSave(billStatus, bill) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[billStatus];

            if (bill === bill.billStatus) {
                const bills = prevState.bills;
                const pos = bills.findIndex(c => c.bill === bill.billStatus);
                return {
                    bills: [...bills.slice(0,pos), Object.assign({}, bill), ...bills.slice(pos+1)],
                    isEditing: isEditing
                }
            }

            return {
                errorInfo: "Cannot edit status",
            }

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
            if (! bills.find(c => c.billNumber === bill.billNumber)) {
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
                <table className="table">
                    <thead>
                    <div className="ml-auto">
                    </div>
                        <tr>
                            <th>Bill number</th>
                            <th>Name</th>
                            <th>Surnames</th>
                            <th>Vehicle</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <NewBill onAddBill={this.addBill}/>
                    {this.state.bills.map((bill) => 
                ! this.state.isEditing[bill.billStatus] ?
                <Bill key={bill.billStatus} bill={bill} 
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}/>
                :
                <EditBill key={bill.billStatus} bill={this.state.isEditing[bill.billStatus]} 
                    onCancel={this.handleCancel.bind(this, bill.billStatus)}
                    onChange={this.handleChange.bind(this, bill.billStatus)}
                    onSave={this.handleSave.bind(this, bill.billStatus)}/>
            )}
                </table>
            </div>
        );
    }
}

export default Bills;