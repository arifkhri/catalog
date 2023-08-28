import { create } from 'zustand';

export interface CartState {
  productsVariants: any[];
  productVariant: any;
  addToCart: (values: any) => void;
  subtractCart: (productId: string) => void;
}

export const cartStore = create<CartState>()((set, get) => ({
  productsVariants: [],
  productVariant: null,
  addToCart: (values: any) => {
    const newList = [...get().productsVariants, values];
    set({productsVariants: newList})
  },
  subtractCart: (productId: string) => {
    const newList = get().productsVariants.filter((product) => product.id !== productId);
    set({productsVariants: newList})
  }
}))
