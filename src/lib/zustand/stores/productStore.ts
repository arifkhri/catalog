import { create } from 'zustand';

export interface ProductState {
  products: any;
}

export const productStore = create<ProductState>()((set) => ({
  products: [],
}))
