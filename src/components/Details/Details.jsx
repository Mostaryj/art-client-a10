import { Link, useLoaderData } from "react-router-dom";
import Nav from "../../pages/shared/Nav";

const Details = () => {
  const cards = useLoaderData();
  console.log(cards);

  return (
    <div>
      <Nav></Nav>
      <h1 className="lg:text-5xl text-3xl font-pop font-bold text-center mt-8">Details </h1>
      <p> <span className="font-bold">Id: </span>{cards._id}</p>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-6 grid lg:grid-cols-2 rounded-xl">
       
        <div className="rounded-xl ">
        <figure>
          <img
            src={cards.photo}
            alt="Album"
            className="rounded-xl md:h-full"
          />
        </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title font-pop lg:text-3xl">{cards.item}</h2>
         
          <p className="text-lg"> <span className="font-bold">Sub-category:</span> {cards.sub}</p>
          <p className="text-lg"> <span className="font-bold">Short description:</span> {cards.description}</p>
          <p className="text-lg"> <span className="font-bold">Price:</span> {cards.price} $</p>
          <p className="text-lg"> <span className="font-bold">Rating:</span> {cards.rating}</p>
          <p className="text-lg"> <span className="font-bold">Stock status:</span> {cards.stock}</p>
          <p className="text-lg"> <span className="font-bold">Processing Time:</span> {cards.time}</p>
          <p className="text-lg"> <span className="font-bold">Customization:</span> {cards.customization}</p>
        

        
          
          <div className="card-actions justify-end">
          <p className="text-lg"> <span className="font-bold">User Name:</span> {cards.name}</p>
          <p className="text-lg"> <span className="font-bold">User Email:</span> {cards.email}</p>

            <Link to='/'>
            <button className="btn btn-primary">Go Back</button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
