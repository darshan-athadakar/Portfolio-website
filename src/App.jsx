import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      
      {/* Education, Certifications, and Achievements Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Education & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Education />
            <Certifications />
          </div>
          <div className="mt-8">
            <Achievements />
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
