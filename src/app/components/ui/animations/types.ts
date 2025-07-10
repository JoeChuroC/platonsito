import { ReactNode } from 'react';

export interface AnimationProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export interface CardProps extends AnimationProps {
  title?: string;
  description?: string;
  onReadMore?: () => void;
}
