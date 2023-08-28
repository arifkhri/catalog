// import style from "./style.module.scss";

import { CartIcon } from "../../components/Icon";

export interface ICart {
  className?: string;
  children?: React.ReactNode;
}

const Cart = ({ children, className }: ICart) => {
  return (
    <div className="">
      <CartIcon />
    </div>
  );
};

export default Cart;
