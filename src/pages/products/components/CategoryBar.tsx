import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { motion } from "framer-motion";
import clsx from "clsx";

import { toStartCase } from "../../../core/utils";
import { ProductCategories } from "../../../types/product";

import CategoryItem from "./CategoryItem";

interface IProps {
  categories: ProductCategories;
}

export default function CategoryBar({ categories }: IProps) {
  return (
    <div>
      <ul className="p-0">
        <ScrollingCarousel className="carousel py-2" leftIcon={<button className="left-arrow" />} rightIcon={<button className="right-arrow" />} >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{ collapsed: { scale: 0.4 }, open: { scale: 1 } }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <li key={category} className="m-2">
                <CategoryItem>{toStartCase(category)}</CategoryItem>
              </li>
            </motion.div>
          ))}
        </ScrollingCarousel>
      </ul>
    </div>
  );
}
