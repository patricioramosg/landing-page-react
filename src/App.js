import './App.css';
import Navbar from './Nav';
import Jumbotron from './Jumbotron';
import Cards from './Card';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Jumbotron />
        <Cards />
      </div>
      <Footer />
    </>

  );
}

export default App;
