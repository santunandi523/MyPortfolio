import React, { useState, useEffect } from 'react';

const titles = [
  'Santu Nandi',
  'Software Engineer',
  'Java Full Stack Developer',
  'Backend Systems Engineer',
  'Competitive Programmer',
];

export const RotatingTitle = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(titles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(85);

  useEffect(() => {
    const currentFullTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing letters forward
        const nextText = currentFullTitle.substring(0, displayText.length + 1);
        setDisplayText(nextText);
        setTypingSpeed(75 + Math.random() * 20); // natural humanized cadence

        // When entire title has finished typing
        if (nextText === currentFullTitle) {
          // Pause at full word for 2.4 seconds so recruiters can read comfortably
          setTypingSpeed(2400);
          setIsDeleting(true);
        }
      } else {
        // Deleting letters backward
        const nextText = currentFullTitle.substring(0, displayText.length - 1);
        setDisplayText(nextText);
        setTypingSpeed(38); // faster smooth deletion

        // When word is fully cleared
        if (nextText === '') {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setTypingSpeed(450); // short pause before typing next title
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed, titleIndex]);

  return (
    <span className="inline-flex items-baseline flex-wrap">
      <span className="text-[#E8EDF2] font-display">{displayText}</span>
      <span
        aria-hidden="true"
        className="ml-1 text-[#F4B942] font-mono font-light select-none animate-pulse"
      >
        |
      </span>
    </span>
  );
};
