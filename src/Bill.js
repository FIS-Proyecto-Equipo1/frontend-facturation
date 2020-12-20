import React from 'react';

function Bill(props) {
    return(
        <tr>
            <td>{props.bill.billNumber}</td>    
            <td>{props.bill.name}</td>            
            <td>{props.bill.surnames}</td>
            <td>{props.bill.vehicle}</td>
            <td>{props.bill.amount}</td>
            <td>{props.bill.billStatus}</td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onEdit(props.bill)}>Edit</button>
                <button className="btn btn-primary" onClick={() => props.onDelete(props.bill)}>Delete</button>
            </td>
        </tr>
    )
}

export default Bill;