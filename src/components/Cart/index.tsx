// import style from "./style.module.scss";

import style from "./style.module.scss";

import { CartIcon } from "../../components/Icon";
import { cartStore } from "../../lib/zustand/stores/cartStore";
import clsx from "clsx";

export default function Cart() {
  const { productsVariants } = cartStore();
  console.log('🚀 INFO: productsVariants:', productsVariants);

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
