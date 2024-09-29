import React, { useState } from "react";
import "./letter.css";
import { SiTinyletter } from "react-icons/si";

const text = ``


const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleModal = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsOpen(true);
      setIsAnimating(false);
    }
  };

  return (
    <div className="letter-section">
      <div className="envelope-container" onClick={toggleModal}>
        <SiTinyletter className="letter-icon" />
        <p className="click-me-text">Click me!</p>
      </div>

      {isOpen && (
        <div className={`modal ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          <div className="modal-content">
            <h2>Letter</h2>
            <p className="modal-content-text">
              Well, here we are. The day has come when I’ve finally gathered all my courage to confess my feelings to you. I feel like there are so many things I haven’t been able to express in person, which is why I’ve written you this letter.

           <br/>   I’m not someone who rushes into decisions or jumps to conclusions. I’ve taken my time to get here, and I believe it was the right thing to do. In this time, I’ve come to know you better, and I’ve had the privilege of seeing the beauty of your soul. You are so sensitive and gentle, radiating a calm energy, like a cool evening breeze in the summer, or the first snow in winter. You’re like a ray of sunlight breaking through the clouds, the fragrance of spring flowers, the song of birds at dawn.

           <br/>     But do you know what’s most incredible? Even with all these words, I can’t truly convey just how special you are to me. It’s been only three months, but it feels like I’ve known you for so much longer. Every time I look at you, I find something new to admire, and I realize just how lucky I am to have met you. I never want to take my eyes off you, because in your presence, everything else seems to fade away. I could listen to your stories forever, get lost in your voice, and I never want to stop seeing that sweet smile of yours.

           <br/>     I love just sitting with you, even in silence, simply feeling your presence beside me. When you rest your head on my shoulder, my heart races as if it’s trying to catch up with the emotions I feel. In those moments, all I want is to lay my head against yours and stay like that, just the two of us. And when I hold you in my arms, it feels like the world outside ceases to exist, and I wish I could freeze time, letting that embrace last forever.

           <br/>     There’s so much I love about you, from the little things that make me smile to the way you light up the world around you. But what I love most is you — the incredible, kind, and beautiful person that you are.
            </p>
            <button onClick={toggleModal} className="close-button">
              Close Letter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Letter;

