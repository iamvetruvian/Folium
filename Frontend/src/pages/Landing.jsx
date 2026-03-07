import Hyperspeed from '../components/Hyperspeed.jsx'
import './Landing.css'
import Navbar from '../components/ui/Navbar.jsx'
import { Link } from 'react-router-dom'
import FloatingLines from '../components/FloatLines.jsx'
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee.jsx'
import StickyFooter from '../components/ui/StickyFooter.jsx'

function Landing() {
  return (
    <>
      <div className="hero">
        <FloatingLines
          enabledWaves={["middle"]}
          // mirrorX={true}
          mirrorY={true}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={8}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={50}
          bendRadius={1.5}
          bendStrength={0.9}
          middleWavePosition={{ x: 0, y: -0.05, rotate: 0.35 }}
          interactive={true}
          parallax={true}
        />

        {/* <Hyperspeed /> */}


        <Navbar />
        <div className="landing-content">
          <h1>Blitz through your tasks <br></br> at the speed of light.</h1>
          <Link to="/login">
            <button className="get-started-btn">Get Started</button>
          </Link>
          {/* <button className="get-started-btn">Get Started</button> */}
          <button className="learn-more-btn">Learn More</button>
        </div>



      </div>
      <div className="a-div dark">

        <TestimonialsSection
          title="What our users say"
          description="Loved by developers and teams worldwide."
          testimonials={[
            {
              author: { name: "Jane Doe", handle: "@janedoe", avatar: "https://i.pravatar.cc/150?img=1" },
              text: "This app completely changed how I manage my tasks. Absolutely love it!",
            },
            {
              author: { name: "Alex Kim", handle: "@alexkim", avatar: "https://i.pravatar.cc/150?img=2" },
              text: "Super fast, intuitive, and beautiful. The best productivity tool I've used.",
            },
            {
              author: { name: "Maria Chen", handle: "@mariachen", avatar: "https://i.pravatar.cc/150?img=3" },
              text: "I went from chaotic sticky notes to a clean, organized workflow in minutes.",
            },
            {
              author: { name: "Sam Rivera", handle: "@samr", avatar: "https://i.pravatar.cc/150?img=4" },
              text: "The speed is unreal. It genuinely feels like tasks complete themselves.",
            },
            {
              author: { name: "Alex Kim", handle: "@alexkim", avatar: "https://i.pravatar.cc/150?img=2" },
              text: "Super fast, intuitive, and beautiful. The best productivity tool I've used.",
            },
            {
              author: { name: "Maria Chen", handle: "@mariachen", avatar: "https://i.pravatar.cc/150?img=3" },
              text: "I went from chaotic sticky notes to a clean, organized workflow in minutes.",
            },
            {
              author: { name: "Sam Rivera", handle: "@samr", avatar: "https://i.pravatar.cc/150?img=4" },
              text: "The speed is unreal. It genuinely feels like tasks complete themselves.",
            },
            {
              author: { name: "Jane Doe", handle: "@janedoe", avatar: "https://i.pravatar.cc/150?img=1" },
              text: "This app completely changed how I manage my tasks. Absolutely love it!",
            },
            {
              author: { name: "Alex Kim", handle: "@alexkim", avatar: "https://i.pravatar.cc/150?img=2" },
              text: "Super fast, intuitive, and beautiful. The best productivity tool I've used.",
            },
            {
              author: { name: "Maria Chen", handle: "@mariachen", avatar: "https://i.pravatar.cc/150?img=3" },
              text: "I went from chaotic sticky notes to a clean, organized workflow in minutes.",
            },
            {
              author: { name: "Sam Rivera", handle: "@samr", avatar: "https://i.pravatar.cc/150?img=4" },
              text: "The speed is unreal. It genuinely feels like tasks complete themselves.",
            },
            {
              author: { name: "Alex Kim", handle: "@alexkim", avatar: "https://i.pravatar.cc/150?img=2" },
              text: "Super fast, intuitive, and beautiful. The best productivity tool I've used.",
            },
            {
              author: { name: "Maria Chen", handle: "@mariachen", avatar: "https://i.pravatar.cc/150?img=3" },
              text: "I went from chaotic sticky notes to a clean, organized workflow in minutes.",
            },
            {
              author: { name: "Sam Rivera", handle: "@samr", avatar: "https://i.pravatar.cc/150?img=4" },
              text: "The speed is unreal. It genuinely feels like tasks complete themselves.",
            }
          ]}
          className="bg-black"
        />

      </div>
      <div className="h-[200px]" style={{ color: "white" }}>
        <h1>Get in touch</h1>
        <p>Ready to take your productivity to the next level? Let's connect!</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <StickyFooter />
    </>
  )
}

export default Landing