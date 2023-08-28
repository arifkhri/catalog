import clsx from 'clsx';

import style from "./style.module.scss";

export default function Footer() {
  return (
      <div className="d-flex items-center flex-col justify-between mt-6 pt-6">
        <div className={style["social"]}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social/fb.svg" width="40px" className="mr-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social/ig.svg" width="40px" />
          </a>
        </div>
        <div className={clsx(['mr-2', style['copyright']])}>
          ©2023 Toko Premium Murah
        </div>
      </div>
  );
}
