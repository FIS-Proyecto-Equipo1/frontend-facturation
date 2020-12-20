import React from 'react';

function EditBill(props) {
    const handleChange = event => {
        props.onChange({...props.bill, [event.target.name]: event.target.value})
    }

    return (
        <tr>
            <td><input className="form-control" name="billNumber" value={props.bill.billNumber} onChange={handleChange}/></td>
            <td><input className="form-control" name="name" value={props.bill.name} onChange={handleChange}/></td>
            <td><input className="form-control" name="surnames" value={props.bill.surnames} onChange={handleChange}/></td>
            <td><input className="form-control" name="vehicle" value={props.bill.vehicle} onChange={handleChange}/></td>
            <td><input className="form-control" name="amount" value={props.bill.amount} onChange={handleChange}/></td>
            <td><input className="form-control" name="billStatus" value={props.bill.billStatus} onChange={handleChange}/></td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onSave(props.bill)}>Save</button>
                <button className="btn btn-primary" onClick={() => props.onCancel(props.bill)}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditBill; 
