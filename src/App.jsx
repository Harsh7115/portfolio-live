import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignalStrip from './components/SignalStrip'
import SelectedWork from './components/SelectedWork'
import ExperienceTimeline from './components/ExperienceTimeline'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SignalStrip />
        <SelectedWork />
        <ExperienceTimeline />
        <Projects />
        <About />
        <Skills />
        <Footer />
      </main>
    </div>
  )
}

export default App
