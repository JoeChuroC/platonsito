'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

interface Props {
  baseKey?: string; // ej: 'hero' → busca 'hero.typing.sequence1', etc.
  sequences?: string[]; // también se puede pasar manualmente
  className?: string;
}

export const TypeEffect = ({ baseKey, sequences, className }: Props) => {
  const locale = useLocale();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = baseKey ? useTranslations(baseKey) : null;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resolvedSequences = sequences ?? (baseKey && t
    ? [
        t('typing.sequence1'),
        t('typing.sequence2'),
        t('typing.sequence3'),
        t('typing.sequence4'),
      ]
    : []);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, baseKey, JSON.stringify(sequences)]); // asegurar re-render si cambian las sequences

  useEffect(() => {
    const currentPhrase = resolvedSequences[sequenceIndex] ?? '';

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
        if (text === '') {
          setIsDeleting(false);
          setSequenceIndex((prev) => (prev + 1) % resolvedSequences.length);
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
  }, [text, isDeleting, sequenceIndex, resolvedSequences, typingSpeed]);

  return (
    <span className={`inline-block mt-2 whitespace-nowrap ${className ?? ''}`}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};
