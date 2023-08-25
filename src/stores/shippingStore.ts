import { create } from 'zustand';

import cookie from '../core/cookie';
import { decode } from '../core/token';

export interface ShippingState {
  users: any;
  create: (users: any) => any;
  update: () => void;
}

export const shippingStore = create<ShippingState>()((set) => ({
  shippings: null,
  setLoginData: (users: any) => {
    cookie.set('usr', JSON.stringify(users));
    set({ users: decode(users.access_token) });
  },
  delLoginData: () => {
    cookie.del('usr');
    set({ users: null });
  },
}))
