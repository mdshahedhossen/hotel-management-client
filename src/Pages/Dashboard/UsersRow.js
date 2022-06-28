import React from 'react';
import { toast } from 'react-toastify';
const UsersRow = ({user,index,refetch,setConfirmModal}) => {
  const {email,role}=user
    const makeAdmin=()=>{
      fetch(`http://localhost:5000/user/admin/${email}`,{
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
      .then(res=>{
        if(res.status === 403){
          toast.error('Failed to Make an admin');
        }
        return res.json()})
        
      .then(data=>{
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
      }
      })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{user.email}</td>
        <td> {role!== 'admin' && <button onClick={makeAdmin} className="btn btn-ghost bg-blue-500 hover:bg-blue-600 btn-xs text-white">Make Adimin</button>}</td>
        <td><label onClick={() => setConfirmModal(user)}htmlFor="delete-confirm-modal" className="btn btn-ghost bg-red-500 hover:bg-red-600 btn-xs text-white">Remove</label ></td>
      </tr>
    );
};

export default UsersRow;