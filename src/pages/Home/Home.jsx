import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../Banner/Banner";
import Nav from "../shared/Nav";
import About from "../../components/extra/About";
import Question from "../../components/extra/Question";
// import { Helmet } from "react-helmet-async";
import { Typewriter } from 'react-simple-typewriter';

import { Fade } from "react-awesome-reveal";



const Home = () => {
  const cards = useLoaderData();

  const handleDone = () => {
    console.log(`Done after 100000 loops!`)
  }
  return (
    <div>
      
      <Nav></Nav>

      <Banner></Banner>

      <h1 className="text-center font-semibold font-pop md:text-3xl mt-8">
     
        <span style={{ color: '', fontWeight: 'bold' }}>
          <Typewriter
            words={['Craft Item Section']}
            loop={1000000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          />
        </span>
      </h1>
      <Fade cascade damping={0.1}>
      <p className="text-center">
        In these photos,. you can choose your photos. Click view details to know
        more about this place
      </p>
      </Fade>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
      cards.slice(0,6).map(card => <Cards key={card.id}
      card={card}></Cards>)
     }
      </div>
      <Question></Question>
      <About></About>
    </div>
  );
};

export default Home;
