import clsx from "clsx";
import { IDetailProduct } from "../../../../../types/product";

import style from './style.module.scss';

interface Props {
  spesifications: IDetailProduct[];
}

export default function Spesification({ spesifications = [] }: Props) {
  return (
    <div>
      <h2 className="m-0">Spesifikasi</h2>
      <ul className="p-0 m-0">
        {spesifications.map((spec) => (
          <li key={spec.label}>
            <div className={clsx(['d-flex', style['speficiation-detail']])}>
              <span className={clsx([style['label-specification'], 'text-sm'])}>{spec.label}</span>
              <span className={clsx([style['desc-specification'], 'text-sm'])}>{spec.description}</span>
            </div>
            </li>
        ))}
      </ul>
    </div>
  );
}
