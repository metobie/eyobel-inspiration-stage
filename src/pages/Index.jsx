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
        <h1 className="text-5xl font-bold text-white mb-4 animate-pulse uppercase">EYOBEL SAMSON</h1>
        <p className="text-xl text-white">DJ | Inspirationsföreläsare</p>
      </div>
      <div className="flex flex-wrap justify-center z-10">
        <ContentBox
          title="DJ Eyobel"
          description="Låt Eyobel skapa den perfekta stämningen för ditt event med sin unika musikstil och energi."
          image="https://i.imgur.com/a1EA8ZY.jpeg"
          alt="Eyobel som DJ"
        />
        <ContentBox
          title="Inspirationsföreläsningar"
          description="Låt Eyobel inspirera dig med sin erfarenhet om hur man tacklar sina drömmar och når sina mål."
          image="https://i.imgur.com/yrd67Vv.png"
          alt="Eyobel som inspirationsföreläsare"
        />
      </div>
    </div>
  );
};

export default Index;