import clsx from 'clsx';

import style from './style.module.scss';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary' | 'primary';
  className?: string;
  children: string | React.ReactNode;
};

export default function Button({variant = 'primary', className = '', children, ...restProps}: IButton) {
  const type = {
    secondary: 'btn-secondary',
    primary: 'btn-primary',
   }

  return (
    <button className={clsx([style[type[variant]], className, 'pointer'])} {...restProps}>
      {children}
    </button>
  );
}
