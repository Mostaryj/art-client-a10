import { useLoaderData } from "react-router-dom";
import Nav from "../../pages/shared/Nav";

const Details = () => {

    const cards  = useLoaderData(); 
    console.log(cards);

   
     return (
         <div>
             <Nav></Nav>
             <h1>details</h1>
         
        </div>
    );
};

export default Details;

