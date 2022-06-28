import React from "react";
import { useNavigate } from "react-router-dom";

const Reservation = ({reservation}) => {
    const {_id,name,img,price,description}=reservation
    const navigate=useNavigate()

    const navigatetoreserved=(id)=>{
      navigate(`/reserve/${id}`)
    }
  return (
    <div className="card lg:max-w-lg bg-base-300 shadow-xl">
      <figure>
        <img className="h-56 w-full" src={img} alt="parts" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-600">{name}</h2>
        <p>{description}</p>
        <div className="bg-slate-300 p-3 rounded-xl">
          <h3>
            Price: <span className="font-bold">{price}</span>$
          </h3>
        </div>
        <div className="card-actions justify-end mt-5 ">
          <button onClick={()=>navigatetoreserved(_id)} className="btn btn-outline btn-success">Reserved Room</button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
