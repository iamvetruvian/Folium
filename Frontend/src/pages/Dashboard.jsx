import Navbar from "../components/ui/Navbar";
import './Dashboard.css'
import DarkVeil from "../components/DarkVeil";
import NewTaskBtn from "../components/ui/NewTaskBtn";
import Bento from "../components/Bento";

export default function Dashboard() {
  return (
    <div className="todos-page">
      <DarkVeil />
      <Navbar />
      <NewTaskBtn />
      <div className="todos-container">
        <Bento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={210}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </div>
    </div>
  )
}