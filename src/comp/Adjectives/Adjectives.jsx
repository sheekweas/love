import React, { useState, useEffect } from "react";
import "./adjectives.css";
import { FaHeart } from "react-icons/fa";

const Adjectives = () => {
  const adjectives = ["Мен сені жақсы көремін", "Я тебя люблю", "Je t'aime", "Ich liebe dich", "Te quiero", "Amo-te", "Ik hou van jou", "Ti amo", "Eu te amo", "S'agapo", "Laku i te dua", "Jag älskar dig", "Kocham cię", "Ma armastan sind", "Jeg elsker dig", "As-tu habibti", "Kimi seviyorum", "Ana behibbik", "Kocham cię", "Saya cinta padamu", "Ngiyakuthanda", "Ikhulekho", "Saya sayang kamu", "Tama a'i ai", "Kiss me", "Aloha wau ia'oe", "Közel állsz a szívemhez", "Wǒ ài nǐ", "Jeg elsker deg", "Te amo", "Sa rakastan sinua", "Ya bikhafika", "Eu te amo", "Ana uhibbuka", "Anak ni ai", "Cinta kita", "O iubesc", "Taalam mu", "Kocham cię", "Ala ikhlas", "Yêu em", "L'adoro", "Te iubesc", "Bu sevgim", "Ndinokuda", "Iekvuo te"];
  const [currentAdjective, setCurrentAdjective] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = adjectives[currentIndex];
      if (isDeleting) {
        setCurrentAdjective((prev) => currentWord.substring(0, prev.length - 1));
        setSpeed(100);
      } else {
        setCurrentAdjective((prev) => currentWord.substring(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && currentAdjective === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentAdjective === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % adjectives.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentAdjective, isDeleting, currentIndex, speed, adjectives]);

  return (
    <div className="adjectives-section">
      <p className="you-are-text">
        <span className="adjective"><FaHeart /> {currentAdjective}</span>
        <span className="cursor">|</span>
      </p>
    </div>
  );
};

export default Adjectives;
