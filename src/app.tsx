import { useEffect } from 'preact/hooks'
import './app.css'
import "./components/style.components.css"
import HeroPage from './components/HeroPage'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe';
import Vm from './components/Vm'

export function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    })

    const hiddenElement = document.querySelectorAll(".onscroll");
    hiddenElement.forEach((element) => observer.observe(element));
  }, []);

  return (
    <section className="content">
      <NavBar />
      <HeroPage />
      <AboutMe />
      <Vm />
    </section>
  )
}
