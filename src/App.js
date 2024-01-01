import './App.css';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <main className='bg-slate-800 h-screen'>
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </main>
  );
}

export default App;
