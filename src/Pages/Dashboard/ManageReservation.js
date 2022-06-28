import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageRow from './ManageRow';
    
const ManageReservation = () => {
    const { isLoading, error, data,refetch } = useQuery(['parts'], () =>
        fetch(`http://localhost:5000/rooms`)
            .then(res =>res.json())          
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    let fetchError;
    if (error) {
        fetchError = <p className='text-red-500 text-3xl'><small>{error?.message}</small></p>
    }
    return (
        <div>
        <h1 className='w-fit mx-auto font-bold border-primary text-lime-600 text-3xl my-5 underline'>Manage Reservation</h1>
        {fetchError}
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr className='mark'>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((room,index) => <ManageRow
                        key={room._id}
                        index={index}
                        room={room}
                        refetch={refetch}
                        ></ManageRow>)
                    }


                </tbody>
            </table>
        </div>
        {/* {confirmModal && <DeleteProduct 
        product={confirmModal}
        refetch={refetch}
        setConfirmModal={setConfirmModal}
        ></DeleteProduct>} */}
    </div>
    );
};

export default ManageReservation;