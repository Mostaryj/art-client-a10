// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

import { Link } from "react-router-dom";



const Cards = ({ card }) => {
  return (
    <div>
      <div className="card card-compact mt-6  bg-base-100 rounded-none border-2">
        <figure>
          <img
            src={card.photo}
            alt="Shoes"
            className="h-[250px]"
          />
        </figure>
        <div className="card-body">
         
          <h2 className="card-title">{card.sub}</h2>
          <p>{card.description}</p>
          <div className="">
           <Link to={`/details/${card._id}`}>
           <button className="btn w-full bg-blue-800 text-white">View Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
