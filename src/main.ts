import './styles.css'
import { createLandingPage } from './components/landingPage'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = createLandingPage()

// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar')
  const hamburger = document.getElementById('hamburger')
  const navMenu = document.getElementById('nav-menu')
  const navLinks = document.querySelectorAll('.nav-link')
  const sections = document.querySelectorAll('section')

  // Mobile menu toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu?.classList.toggle('active')
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active')
      navMenu?.classList.remove('active')
    })
  })

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')?.substring(1)
      const targetSection = document.getElementById(targetId || '')

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })

  // Navbar scroll effect and active section highlighting
  function updateNavbar() {
    const scrollY = window.scrollY

    // Add/remove scrolled class
    if (scrollY > 50) {
      navbar?.classList.add('scrolled')
    } else {
      navbar?.classList.remove('scrolled')
    }

    // Highlight active section
    let current = ''
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || ''
      }
    })

    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active')
      const linkSection = link.getAttribute('data-section')
      if (linkSection === current) {
        link.classList.add('active')
      }
    })
  }

  // Throttled scroll event listener
  let ticking = false
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar()
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('scroll', onScroll)

  // Initial call
  updateNavbar()

  // CTA button functionality
  const ctaButtons = document.querySelectorAll('.cta-button')

  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      // Open Calendly booking page in a new tab
      window.open('https://calendly.com/austinedigitals-net/20min', '_blank')
    })
  })  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
