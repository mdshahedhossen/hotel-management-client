import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reserve = () => {
    const {id}=useParams();
    const [user]=useAuthState(auth)
    const [roomDetails, setRoomDetails] = useState({});

    const [error,setError]=useState('')

    const {_id,img,name,description,price}=roomDetails
    useEffect(()=>{
        const url=`http://localhost:5000/rooms/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setRoomDetails(data))
    },[id])

    const handleReserve=e=>{
        e.preventDefault()
        const address = e.target.address.value;
        const phone = e.target.phone.value;

        const reserve = {
            email: user.email,
            productName: name,
            address,
            phone,
            img: img
        }
        // console.log(order)
        fetch('http://localhost:5000/reserve',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reserve)

        })
        .then(res=>res.json())
        .then(data =>{
          if(data.success){
            toast('reaserve Pleaced')
               e.target.reset()
          }
          else{
            toast.error('something has worng plase try again')
          }

        });


    }
    return (
        <section>
            <h2 className='text-center text-primary font-bold text-3xl mb-12 mt-12 underline'>Your Reserved Room</h2>
            <div className="flex flex-col w-full lg:flex-row mb-14">
           
  <div className="grid flex-grow card rounded-box place-items-center">
  <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure><img className='h-56 w-full'src={img} alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-600">{name}</h2>
    <p>{description}</p>
    <div className='bg-slate-300 p-3 rounded-xl'>
    <h3>Price: <span className='font-bold'>{price}</span>$</h3>
    </div>
    
  </div>
</div>
  </div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow card rounded-box place-items-center">
      
      <form onSubmit={handleReserve} className='flex flex-col'>
      <h2 className='text-center font-bold text-2xl mb-12'>Purchase Now</h2>
      <input type="text"  name='name' placeholder="Name" className="mb-4  input input-bordered w-full max-w-xs" value={user?.displayName ||''} readOnly/>
        <input type="email"  name='emial' placeholder="Email" className="mb-4  input input-bordered w-full max-w-xs" value={user?.email ||''} readOnly />
        <input type="text"  name='address' placeholder="Your Address" className=" mb-4 input input-bordered w-full max-w-xs" required />
        <input type="number"  name='phone' placeholder="Phone" className=" mb-4 input input-bordered w-full max-w-xs" required/>
        <button disabled={error} className='btn btn-outline btn-success mt-4' >Reserved Now</button>
      </form>
  </div> 
</div>
<ToastContainer/>
        </section>
    );
};

export default Reserve;