import React from 'react';
import { Button } from "@/components/ui/button";

const ContentBox = ({ title, description, image, alt, service }) => {
  const getEmailContent = (service) => {
    if (service === 'dj') {
      return {
        subject: 'Förfrågan om DJ-tjänster',
        body: 'Hej Eyobel,\n\nJag är intresserad av att veta mer om dina DJ-tjänster. Kan du berätta mer om vilka typer av event du spelar på och vilka musikstilar du erbjuder?\n\nTack på förhand!'
      };
    } else if (service === 'speaker') {
      return {
        subject: 'Förfrågan om inspirationsföreläsning',
        body: 'Hej Eyobel,\n\nJag är intresserad av att boka dig för en inspirationsföreläsning. Kan du berätta mer om dina föreläsningar och vilka ämnen du täcker?\n\nTack på förhand!'
      };
    }
  };

  const handleBooking = () => {
    const { subject, body } = getEmailContent(service);
    const mailtoLink = `mailto:bokning@eyoo.se?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const mobileTitle = title === "INSPIRATIONSFÖRELÄSNINGAR" ? "INSPIRATIONS-\nFÖRELÄSNINGAR" : title;

  return (
    <div className="content-box text-white flex flex-col items-center md:w-auto w-[calc(100%+2rem)] -mx-4 md:mx-0">
      <h2 className="text-2xl font-bold mb-4 text-center md:hidden whitespace-pre-line">{mobileTitle}</h2>
      <h2 className="text-2xl font-bold mb-4 text-center hidden md:block">{title}</h2>
      <img src={image} alt={alt} className="w-full h-48 object-cover mb-4 rounded" />
      <p className="mb-4 text-center">{description}</p>
      <Button 
        onClick={handleBooking}
        className="bg-white text-black hover:bg-gray-200"
      >
        Boka nu
      </Button>
    </div>
  );
};

export default ContentBox;