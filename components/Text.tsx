"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { Acme } from "next/font/google";
interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
}

export const TypingText: React.FC<TypingTextProps> = ({
  words,
  typingSpeed,
}) => {
  const [displayedText, setDisplayedText] = useState<string>(""); // Initial state is an empty string
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0); // Index of the current word being displayed
  const textRef = useRef<THREE.Object3D>(null);
  const textIndexRef = useRef<number>(0); // Keeps track of the index of the text being displayed

  // Function to update displayed text
  const updateDisplayedText = () => {
    if (textIndexRef.current < words[currentWordIndex].length - 1) {
      setDisplayedText(
        (prev) => prev + words[currentWordIndex][textIndexRef.current]
      );
      textIndexRef.current += 1;
    } else {
      // Move to the next word
      textIndexRef.current = -1; // Reset text index
      setCurrentWordIndex((prev) => (prev + 1) % words.length); // Increment the current word index
      setDisplayedText(""); // Reset displayed text to start animating the next word
    }
  };

  useEffect(() => {
    const timer = setInterval(updateDisplayedText, typingSpeed);

    return () => clearInterval(timer);
  }, [words, typingSpeed, currentWordIndex]);

  return (
    <Text
      ref={textRef}
      fontSize={0.9}
      position={[0, 0, -1]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      SENTHIL
    </Text>
  );
};
