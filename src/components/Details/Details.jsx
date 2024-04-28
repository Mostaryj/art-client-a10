import { useLoaderData } from "react-router-dom";
import Nav from "../../pages/shared/Nav";

const Details = () => {
  const cards = useLoaderData();
  console.log(cards);

  return (
    <div>
      <Nav></Nav>
      <h1 className="lg:text-5xl text-3xl font-pop font-bold text-center mt-8">Details </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-6 grid lg:grid-cols-2 rounded-xl">
        <div className="rounded-xl">
        <figure>
          <img
            src={cards.photo}
            alt="Album"
            className="rounded-xl"
          />
        </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title font-pop lg:text-3xl">{cards.item}</h2>
         
          <p className="text-lg"> <span className="font-bold">Sub-category:</span> {cards.sub}</p>
          <p className="text-lg"> <span className="font-bold">Short description:</span> {cards.description}</p>
          <p className="text-lg"> <span className="font-bold">Short description:</span> {cards.description}</p>
          <p className="text-lg"> <span className="font-bold">Short description:</span> {cards.description}</p>
          <p className="text-lg"> <span className="font-bold">Short description:</span> {cards.description}</p>
          <p className="text-lg"> <span className="font-bold">Short description:</span> {cards.description}</p>

        
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
