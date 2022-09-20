import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ContactBar from './Components/ContactBar/ContactBar';
import About from './Sections/About/About';
import Home from './Sections/Home/Home';
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects'

function App() {
  return (
    <main className='main'>
      <Navbar />
      <div className='app_section_container'>
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
      <ContactBar />
      <Footer />
      

    </main>
  
    );
}

export default App;
