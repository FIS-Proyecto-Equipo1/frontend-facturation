import React from 'react';

function EditBill(props) {
    const handleChange = event => {
        props.onChange({...props.bill, [event.target.billStatus]: event.target.value})
    }

    return (
        <tr>
            <td><input className="form-control" name="billStatus" value={props.bill.billStatus} onChange={handleChange}/></td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onSave(props.bill)}>Save</button>
                <button className="btn btn-primary" onClick={() => props.onCancel(props.bill)}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditBill; 
