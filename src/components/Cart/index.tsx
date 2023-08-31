// import style from "./style.module.scss";

import clsx from "clsx";

import style from "./style.module.scss";

import { CartIcon } from "../../components/Icon";
import { cartStore } from "../../lib/zustand/stores/cartStore";

export default function Cart() {
  const { productsVariants } = cartStore();

  return (
    <div>
      <div className="relative pointer">
        <CartIcon />
        {productsVariants.length > 0 && (
          <div className={clsx([style["badge"], 'text-sm absolute'])}>{productsVariants.length}</div>
        )}
      </div>
    </div>
  );
}
