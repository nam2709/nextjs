'use client'

import React, { useState, useEffect, useRef } from 'react';
import './VideoBG.css';
import Menu from './Menu.js';

const VideoBG = () => {
  const [isTransparent, setTransparent] = useState(false);
  const [isTriggered, setTriggered] = useState(false);
  const h1Ref = useRef();

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check the scroll position
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Set the transparent state based on the scroll position
      setTransparent(scrollPosition > 0);

      // Check if the scroll position has reached 500px
      if (scrollPosition >= 500) {
        // Set the state to trigger the desired action
        setTriggered(true);
      } else {
        setTriggered(false);
      }

      // Check if the top of the h1 element is in the viewport
      // const h1Top = h1Ref.current.getBoundingClientRect().top;
      // if (h1Top <= window.innerHeight) {
      //   // The top of the h1 element is visible
      //   console.log('h1 is in the viewport');
      // }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`videos ${isTransparent ? 'transparent' : ''}`}>
        <video src="/goodbg.mp4" autoPlay loop muted />
        <div className={`content ${isTriggered ? 'triggered' : ''}`}>
          <h1>
            PREMIE<img src="/r.png" alt="Icon" width="320" height="150" /> LEAGUE {' '}
            <img src="/aa.png" alt="Icon" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoBG;
