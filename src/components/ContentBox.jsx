import React from 'react';
import { Button } from "@/components/ui/button";

const ContentBox = ({ title, description, image, alt }) => {
  return (
    <div className="content-box text-white flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <img src={image} alt={alt} className="w-full h-48 object-cover mb-4 rounded" />
      <p className="mb-4 text-center">{description}</p>
      <Button 
        onClick={() => window.location.href = 'mailto:bokning@eyoo.se'}
        className="bg-white text-black hover:bg-gray-200"
      >
        Boka nu
      </Button>
    </div>
  );
};

export default ContentBox;