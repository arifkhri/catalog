import { create } from 'zustand';

import cookie from '../core/cookie';
import { decode } from '../core/token';

export interface AuthState {
  users: any;
  setLoginData: (users: any) => any;
  delLoginData: () => void;
}

export const authStore = create<AuthState>()((set) => ({
  users: null,
  setLoginData: (users: any) => {
    cookie.set('usr', JSON.stringify(users));
    set({ users: decode(users.access_token) });
  },
  delLoginData: () => {
    cookie.del('usr');
    set({ users: null });
  },
}))
