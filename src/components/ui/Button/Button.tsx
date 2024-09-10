import React from 'react';

import cn from '@/utils/mergeClasses';

import styles from './Button.module.scss';

export const ButtonVariant = [
  'primary',
  'primary-outline',
  'secondary',
  'secondary-outline',
  'tertiary',
  'tertiary-outline',
] as const;
export const ButtonSize = ['sm', 'base', 'lg'] as const;
const ButtonType = ['button', 'submit', 'reset'] as const;

type ButtonProps = {
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  type?: (typeof ButtonType)[number];
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, className, variant = 'primary', size = 'base', type = 'button', ...rest }, ref) => (
    <button
      ref={ref}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(styles.button, styles[`button__variant--${variant}`], styles[`button__size--${size}`], className)}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
