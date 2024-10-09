import './App.scss'
import Languages from './components/aboutme/languages/Languages'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/NavBar'
import Projects from './components/projects/Projects'
import Knowledge from './components/knowledge/Knowledge' 
import Contact from './components/contact/Contact'

const App = () =>{
  return <div>

    
    <section>
      <Navbar />
      <Hero />
    </section>

    {/* about me section ( mac window ui ) */}
    <section><Languages /></section>

    <section>
      <Knowledge />
    </section>
    
    
    <Projects />

        <section>
        <Contact />
      </section>


  </div>
}

export default App

