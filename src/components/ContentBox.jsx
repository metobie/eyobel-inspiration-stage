import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="w-full max-w-sm bg-white/10 backdrop-blur-md text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold mb-4 text-center md:block hidden">{title}</CardTitle>
        <CardTitle className="text-2xl font-bold mb-4 text-center md:hidden whitespace-pre-line">{mobileTitle}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <img src={image} alt={alt} className="w-full h-48 object-cover mb-4 rounded" />
        <p className="mb-4 text-center">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          onClick={handleBooking}
          className="bg-white text-black hover:bg-gray-200"
        >
          Boka nu
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentBox;