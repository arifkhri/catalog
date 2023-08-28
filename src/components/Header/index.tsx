import clsx from "clsx";
import Link from "next/link";

import style from "./style.module.scss";

import Cart from "../Cart";

export default function Header() {
  return (
    <header className={clsx(['d-flex justify-between py-4 items-center px-3', style['header']])}>
      <Link href="/" className="link">
        <img src="/logo.png" width="350px" />
      </Link>
      <Cart />
    </header>
  );
}
