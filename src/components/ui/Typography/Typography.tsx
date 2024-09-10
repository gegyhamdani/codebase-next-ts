import React, { ElementType, JSX, memo, ReactNode } from 'react';

import cn from '@/utils/mergeClasses';

import styles from './Typography.module.scss';

export const VariantMapping: Record<string, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'p',
  p: 'p',
  caption: 'p',
  'caption-bold': 'p',
  label: 'label',
};

export const ColorVariant = ['primary', 'secondary', 'tertiary', 'primary-black'] as const;

type TypographyProps = {
  variant?: keyof typeof VariantMapping;
  color?: (typeof ColorVariant)[number];
  className?: string;
  children: ReactNode;
  as?: ElementType;
} & React.HTMLAttributes<HTMLElement>;

const Typography = ({
  variant = 'body1',
  color = 'primary',
  className,
  children,
  as: Component = VariantMapping[variant] || 'p',
  ...props
}: TypographyProps) => {
  const typographyClass = cn(styles[`typography--variant-${variant}`], styles[`typography--color-${color}`], className);

  return (
    <Component className={typographyClass} {...props}>
      {children}
    </Component>
  );
};

export default memo(Typography);
