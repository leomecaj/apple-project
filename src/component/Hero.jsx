import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo,smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window, innerWidth < 760 ? smallHeroVideo : heroVideo);
  
  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  }

  useEffect(() => {
    handleVideoSrcSet();
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])
  
  useGSAP(() => {
    gsap.to('#hero',{ opacity: 1 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-4/5 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-8/10 w-5/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>

      </div>
    </section>
  )
}

export default Hero
