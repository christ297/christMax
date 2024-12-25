import React, { useEffect } from 'react';
import { Howl } from 'howler';

const ChristmasMusic = () => {
  useEffect(() => {
    const music = new Howl({
      src: ['/test.mp3'],
      autoplay: false,  
      loop: true,
      volume: 0.5,
    });

    const clickEvent = () => {
      music.play();
    };

    const button = document.createElement('button');
    button.style.display = 'none';  
    document.body.appendChild(button);
    button.click = clickEvent;

    button.click();


    return () => {
      document.body.removeChild(button);
      music.stop();
    };
  }, []);

  return null; 
};

export default ChristmasMusic;
