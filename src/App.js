import './App.css';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import profilePic from './profile_pic.JPG';

function App() {
  return (
    <main className='bg-slate-800'>
      <Header />
      <div className='flex justify-center h-auto w-1/2'>
        <img src={profilePic} className='shadow rounded-md m-10'/>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
