import style from "./style.module.scss";

// import { CartInfoIcon } from "../Icon";

export interface ICartInfo {
  className?: string;
  children?: React.ReactNode;
}

export default function CartInfo({ children, className }: ICartInfo) {
  return (
    <div>
      {/* <CartInfoIcon /> */}
    </div>
  );
};
