import React, { useEffect, useRef, useState } from 'react';
import ContentBox from '../components/ContentBox';

const Index = () => {
  const spotlightRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      updateSpotlight(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateSpotlight(touch.clientX, touch.clientY);
      }
    };

    const updateSpotlight = (x, y) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--x', `${x}px`);
        spotlightRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    // Initialize spotlight effect at the center of the screen
    const initSpotlight = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      updateSpotlight(centerX, centerY);
    };

    // Run initSpotlight when the component mounts
    initSpotlight();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Set isLoaded to true after a short delay to trigger animations
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="gradient-overlay absolute inset-0 z-0"></div>
      <div className="spotlight" ref={spotlightRef}></div>
      <div className={`z-10 text-center mb-8 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <img src="https://imgur.com/0LHKV77.png" alt="DJ EYOO Logo" className="mx-auto w-80 h-auto mb-4" />
        <p className="text-xl text-white">DJ & Inspirationsföreläsare</p>
      </div>
      <div className={`flex flex-wrap justify-center gap-8 z-10 w-full md:w-auto transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ContentBox
          title="DJ EYOO"
          description="Låt Eyobel skapa den perfekta stämningen för ditt event med sin unika musikstil och energi."
          image="https://i.imgur.com/a1EA8ZY.jpeg"
          alt="Eyobel som DJ"
          service="dj"
        />
        <ContentBox
          title="INSPIRATIONSFÖRELÄSNINGAR"
          description="Låt Eyobel inspirera dig med sin erfarenhet om hur man tacklar sina drömmar och når sina mål."
          image="https://i.imgur.com/yrd67Vv.png"
          alt="Eyobel som inspirationsföreläsare"
          service="speaker"
        />
      </div>
      <div className={`z-10 text-center mt-8 text-white transition-all duration-1000 delay-600 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p>Email: <a href="mailto:bokning@eyoo.se" className="underline">bokning@eyoo.se</a></p>
        <p>Tel: <a href="tel:+46700131356" className="underline">+46 70-013 13 56</a></p>
      </div>
      <div className={`z-10 text-center mt-4 text-white text-sm opacity-60 hover:opacity-100 transition-opacity transition-all duration-1000 delay-900 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p>
          Designed by <a href="https://renew-io.se" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">Renew I/O</a>
        </p>
      </div>
    </div>
  );
};

export default Index;
