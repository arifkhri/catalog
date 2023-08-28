import { IProduct } from "../../../../types/product";

interface Props {
  description: IProduct["description"];
}

export default function Description({ description }: Props) {
  return (
    <div className="mb-5">
      <h2 className="m-0">Deskripsi</h2>
      <p className="text-sm m-0">{description}</p>
    </div>
  );
}
