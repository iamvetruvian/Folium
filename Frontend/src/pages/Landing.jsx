import './Landing.css'
import Navbar from '../components/ui/Navbar.jsx'
import Footer from '@/components/ui/footer-7.jsx'
import Hero from '../components/Hero/Hero.jsx'
import ContactUs from '../components/ContactUs/ContactUs.jsx'
import BackToTop from '../components/ui/BackToTop.jsx'
import Testimonials from '../components/testimonials/testimonials.jsx'

function Landing() {
  return (
    <>
      <Navbar loginBtn={true} />
      <Hero />
      <Testimonials />
      <ContactUs />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Landing