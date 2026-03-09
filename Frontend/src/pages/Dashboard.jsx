import Navbar from "../components/ui/Navbar";
import './Dashboard.css'
// import DarkVeil from "../components/DarkVeil";
import NewTaskBtn from "../components/ui/NewTaskBtn";
import Bento from "../components/Bento";
import PageTransition from "../components/ui/PageTransition";
import { useEffect } from "react";
// import axios from "axios";


export default function Dashboard() {
  // useEffect(() => {
  //   const isAuthenticated = async () => {
  //     const response = await fetch('http://localhost:5000/api/isAuthenticated', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem('token')}`
  //       }
  //     })
  //     const data = await response.json()
  //     console.log(data)
  //     if (!data.success) {
  //       window.location.href = '/login'
  //     }
  //   }
  //   isAuthenticated()
  // }, [])
  return (
    <PageTransition>
      <div className="todos-page">
        {/* <DarkVeil /> */}
        <Navbar loginBtn={false} />
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
    </PageTransition>
  )
}