import './i18n/i18n';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Home } from './sections/home';
import { About } from './sections/about';
import { Experience } from './sections/experience';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';
import { Certificates } from './sections/certificates';
import { Contact } from './sections/contact';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
