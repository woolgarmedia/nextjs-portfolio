'use client';

import  { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!typing) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
            setDisplayText('');
            setTyping(false);
          }, 1000); // Adjust the delay as needed
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, typing]);

  useEffect(() => {
    if (!typing) {
      setTyping(true);
    }
  }, [typing]);

  return displayText;
};

const TypewriterP = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
  
    return <p>{displayText}</p>;
  };

const TypewriterH1 = ({ text, speed, className }) => {
    const displayText = useTypewriter(text, speed);
    return <h1 className={`${className}`}>{displayText}</h1>;
};
  
  export  { TypewriterP, TypewriterH1 };