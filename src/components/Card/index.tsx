import style from './style.module.scss';

export interface ICard {
  className?: string;
  children?: React.ReactNode;
  variant?: 'transparent' | 'solid';
};

export default function Card({children, className = '', variant='solid'}: ICard) {
  const type ={
    transparent: 'transparent-card',
    solid: 'solid-card',
  };

  return (
    <div className={`${className} ${style['card']} ${style[type[variant]]}`}>
      {children}
    </div>
  );
}
