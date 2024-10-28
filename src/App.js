import logo from './images/airbnb-logo.png';
import photoGrid from './images/photo-grid.png';
import './App.css'
import Card from './components/Card.jsx'
// import katieImg from "./images/katie-zaferes.png";
import data from './data.js'



function Navbar(){
  return (
    <nav>
      <img src={logo} className='header-logo' alt="airbnb-logo"/>
    </nav>
  )
}

function HeroComponent(){
  return (
    <section className='hero'>
    <img src={photoGrid} alt="" className='hero-img'/>
    <h1 className='hero-header'>Online Experiences</h1>
    <p className="hero-text"> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

function App() {

  const cards = data.map(c => { 
    return (<Card key={c.id} img={c.coverImg} rating={c.stats.rating} reviewCount={c.stats.reviewCount}
      location={c.location} title={c.title} price={c.price} openSpots={c.openSpots} />)
  })

  return (
    <>
    <Navbar />
    <HeroComponent />
    <section className="cards-list">
      {cards}
    </section>
    </>
  );
}

export default App;
