import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../Banner/Banner";
import Nav from "../shared/Nav";
import About from "../../components/extra/About";
// import { Helmet } from "react-helmet-async";

const Home = () => {
  const cards = useLoaderData()
  return (
    <div>
      {/* <Helmet>
        <title>Artz | Home</title>
      </Helmet> */}
      <Nav></Nav>

      <Banner></Banner>

      <h1 className="text-center font-semibold font-pop text-3xl mt-8">
        Craft Item Section
      </h1>
      <p className="text-center">
        In these photos, you can choose your photos. Click view details to know
        more about this place
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
      cards.slice(0,6).map(card => <Cards key={card.id}
      card={card}></Cards>)
     }
      </div>
      <About></About>
    </div>
  );
};

export default Home;
