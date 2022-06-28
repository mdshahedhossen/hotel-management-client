import React from 'react';

const ManageRow = ({index,room}) => {
    const { name, price,_id } = room;
    const shipping = () => {
    }
    return (
        <tr className="hover">
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{price}</td>
        <td>
            <button onClick={shipping} className='btn btn-sm btn-naturel'>Edit</button>
        </td>

    </tr>
    );
};

export default ManageRow;