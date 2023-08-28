// import style from "./style.module.scss";

import { CartIcon } from "../../components/Icon";

export interface ICart {
  className?: string;
  children?: React.ReactNode;
}

export default function Cart({ children, className }: ICart) {
  return (
    <div>
      <CartIcon />
    </div>
  );
};
