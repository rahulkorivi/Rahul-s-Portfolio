
import React, { useState, useEffect } from 'react';

const greetings = ["Hello", "नमस्ते", "Bonjour", "Hola", "你好", "Konnichiwa", "Guten Tag", "Olá"];
const GREETING_INTERVAL = 250; // ms between greetings
const FADE_TIME = 200; // ms for fade transition

interface GreetingProps {
    onFinished: () => void;
}

const Greeting: React.FC<GreetingProps> = ({ onFinished }) => {
    const [index, setIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // When all greetings have been shown, start the exit sequence.
        if (index >= greetings.length) {
            setIsExiting(true);
            const exitTimer = setTimeout(onFinished, FADE_TIME);
            return () => clearTimeout(exitTimer);
        }

        // Set up an interval to cycle through the greetings.
        const intervalId = setInterval(() => {
            setIsFadingOut(true); // Start fading out the current greeting.
            
            // After the fade-out duration, update the greeting text and fade it back in.
            setTimeout(() => {
                setIndex(prevIndex => prevIndex + 1);
                setIsFadingOut(false);
            }, FADE_TIME);
        }, GREETING_INTERVAL);

        // Clean up the interval when the component unmounts or the index changes.
        return () => clearInterval(intervalId);
    }, [index, onFinished]);

    return (
        <div 
            className={`fixed inset-0 bg-[#2E2B26] z-[100] flex items-center justify-center transition-opacity duration-500 ease-in-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
        >
            {index < greetings.length && (
                 <h1 
                    className={`text-[#656772] font-mono text-5xl md:text-7xl transition-opacity duration-200 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
                >
                    {greetings[index]}
                </h1>
            )}
        </div>
    );
};

export default Greeting;
