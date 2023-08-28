import clsx from "clsx";
import { IProduct } from "../../../../../types/product";

import style from './style.module.scss';

interface Props {
  description: IProduct["description"];
}

export default function Description({ description }: Props) {
  return (
    <div className={clsx(['mb-5', style['description']])}>
      <h2 className="m-0">Deskripsi</h2>
      <p className="text-sm m-0">{description}</p>
    </div>
  );
}
