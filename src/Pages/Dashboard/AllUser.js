import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
// import DeleteUser from './DeleteUser';
import UsersRow from './UsersRow';

const AllUser = () => {
    const [setConfirmModal] = useState(null);
    const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Admin</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=><UsersRow
            key={user._id}
            user={user}
            index={index}
            refetch={refetch}
            setConfirmModal={setConfirmModal}
            ></UsersRow>)
        }
      
    </tbody>
  </table>
</div>
{/* {confirmModal && <DeleteUser 
            user={confirmModal}
            refetch={refetch}
            setConfirmModal={setConfirmModal}
            ></DeleteUser>} */}
        </div>
    );
};

export default AllUser;