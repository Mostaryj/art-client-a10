import Banner from "../Banner/Banner";
import Nav from "../shared/Nav";
// import { Helmet } from "react-helmet-async";


const Home = () => {





 
  return (
    <div>
      {/* <Helmet>
        <title>Artz | Home</title>
      </Helmet> */}
        <Nav></Nav>
        
      
       
      <Banner></Banner>
     
     
      
       

      <h1 className="text-center font-semibold font-pop text-3xl mt-8">Some of our places</h1>
        <p className="text-center">In these photos, you can choose your places. Click view details to know more about this place</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {
      cards.map(card => <Cards key={card.id}
      card={card}></Cards>)
     } */}
        </div>

        

     
      
    
    

     
    
     </div>
  );
};

export default Home;
