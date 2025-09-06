import './i18n/i18n';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Home } from './sections/home';
import { About } from './sections/about';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';
import { Certificates } from './sections/certificates';
import { Contact } from './sections/contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
        <About />
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
