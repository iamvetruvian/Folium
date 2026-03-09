import './Hero.css'
import { Link } from 'react-router-dom'
import FloatingLines from '../FloatLines.jsx'

function Hero() {
    return (
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
            <div className="landing-content">
                <h1>Blitz through your tasks <br></br> at the speed of light.</h1>
                <Link to="/login">
                    <button className="get-started-btn">Get Started</button>
                </Link>
                {/* <button className="get-started-btn">Get Started</button> */}
                <button className="learn-more-btn">Learn More</button>
            </div>
        </div>
    )
}

export default Hero
