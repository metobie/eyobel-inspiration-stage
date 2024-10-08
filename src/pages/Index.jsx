import React, { useEffect, useRef } from 'react';
import ContentBox from '../components/ContentBox';

const Index = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        spotlightRef.current.style.setProperty('--x', `${clientX}px`);
        spotlightRef.current.style.setProperty('--y', `${clientY}px`);
      }
    };

    // Initiera spotlight-effekten i mitten av skärmen
    const initSpotlight = () => {
      if (spotlightRef.current) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        spotlightRef.current.style.setProperty('--x', `${centerX}px`);
        spotlightRef.current.style.setProperty('--y', `${centerY}px`);
      }
    };

    // Kör initSpotlight när komponenten monteras
    initSpotlight();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="gradient-overlay absolute inset-0 z-0"></div>
      <div className="spotlight" ref={spotlightRef}></div>
      <div className="z-10 text-center mb-8">
        <img src="https://imgur.com/0LHKV77.png" alt="DJ EYOO Logo" className="mx-auto w-80 h-auto mb-4" />
        <p className="text-xl text-white">DJ | Inspirationsföreläsare</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 z-10 w-full md:w-auto">
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
      <div className="z-10 text-center mt-8 text-white">
        <p>Email: <a href="mailto:bokning@eyoo.se" className="underline">bokning@eyoo.se</a></p>
        <p>Tel: <a href="tel:+46700131356" className="underline">+46 70-013 13 56</a></p>
      </div>
      <div className="z-10 text-center mt-4 text-white text-sm opacity-60 hover:opacity-100 transition-opacity">
        <p>
          Designed by <a href="https://renew-io.se" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">Renew I/O</a>
        </p>
      </div>
    </div>
  );
};

export default Index;