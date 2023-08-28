import Card from "../../../../../components/Card";
import Button from "../../../../../components/Button";
import { IProduct } from "../../../../../types/product";
import clsx from "clsx";
import { IVariant, IVariantValue } from "../../../../../types/product";

import style from "./style.module.scss";

interface Props {
  product: IProduct;
}

export default function CategoryItem({ product }: Props) {
  // const [form]
  function onClickAttribute(attribute: IVariantValue) {
    console.log("🚀 ~ file: index.tsx:17 ~ attribute:", attribute);
  }

  function renderAttributes(variant: IVariant) {
    const attributesComp = [] as JSX.Element[];

    variant.values.forEach((attribute: IVariantValue) => {
      attributesComp.push(
        <Button
          className="mr-2"
          variant="secondary"
          onClick={() => onClickAttribute(attribute)}
        >
          {attribute.label}
        </Button>
      );
    });

    return attributesComp;
  }

  function addToCart() {
    console.log('hi')
  }

  return (
    <Card className={clsx(["p-3 d-flex flex-col", style["product-cart"]])}>
      <span className={clsx(['text-lg pb-4', style['variant-label']])}>Pilih Varian</span>
      <div className="d-flex flex-col">
        {product?.variants?.length > 1 ? (
          product?.variants.map((variant) => (
            <div className="d-flex flex-col mb-5" key={variant.id}>
              <span className={clsx(['text-sm mb-2', style['attribute-label']])}><strong>{variant.label}:</strong> <span className={style['attributes-label']}>{variant.values.length} Varian</span></span>
              <div className="d-flex" style={{height: '30px'}}>{renderAttributes(variant)}</div>
            </div>
          ))
        ) : (
          <></>
        )}

        <Button onClick={() => addToCart}>
          + Keranjang
        </Button>
      </div>
    </Card>
  );
}
