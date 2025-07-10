'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  sequences: string[]; // ahora es obligatorio
  className?: string;
}

export const TypeEffect = ({ sequences, className }: Props) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setText('');
    setIsDeleting(false);
    setSequenceIndex(0);
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [JSON.stringify(sequences)]); // reinicia si cambian las secuencias

  useEffect(() => {
    const currentPhrase = sequences[sequenceIndex] ?? '';

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
        if (text === '') {
          setIsDeleting(false);
          setSequenceIndex((prev) => (prev + 1) % sequences.length);
          setTypingSpeed(200);
        }
      } else {
        setText(currentPhrase.slice(0, text.length + 1));
        setTypingSpeed(100);
        if (text === currentPhrase) {
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      }
    };

    typingTimeout.current = setTimeout(handleTyping, typingSpeed);
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [text, isDeleting, sequenceIndex, sequences, typingSpeed]);

  return (
    <span className={`inline-block mt-2 whitespace-nowrap ${className ?? ''}`}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};
