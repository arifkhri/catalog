import { create } from 'zustand';

import { IProduct } from '../../../types/product';

export interface CartState {
  products: IProduct[];
}

export const cartStore = create<CartState>()((set, get) => ({
  products: [],
  addToCart: (product: IProduct) => {
    const newList = [...get().products, product];
    set({products: newList})
  },
  subtractCart: (productId: string) => {
    const newList = get().products.filter((product) => product.id !== productId);
    console.log('🚀 ~ file: cartStore.ts:17 ~ newList:', newList);
    set({products: newList})
  }
}))
