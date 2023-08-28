import style from './style.module.scss';

export interface ICard {
  className?: string;
  children?: React.ReactNode;
};

const Card = ({children, className = ''}: ICard) => {
  return (
    <div className={`${style['card']} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
