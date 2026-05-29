import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')
    if (!targets.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay
            if (delay) {
              entry.target.style.transitionDelay = `${delay}ms`
            }
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  return <Home />
}

export default App
