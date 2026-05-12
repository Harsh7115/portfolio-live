import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedSystems from './components/SelectedSystems'
import Timeline from './components/Timeline'
import ProjectIndex from './components/ProjectIndex'
import StackConsole from './components/StackConsole'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#030303', minHeight: '100vh', overflowX: 'hidden', color: '#f8fafc' }}>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <main>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <SelectedSystems />
        </ErrorBoundary>
        <ErrorBoundary>
          <Timeline />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProjectIndex />
        </ErrorBoundary>
        <ErrorBoundary>
          <StackConsole />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </main>
    </div>
  )
}
