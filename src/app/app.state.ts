export interface Photos {
  filename: string;
  originalname: string;
}

export interface Reserves {
  id: number;
  name: string;
  country: string;
  city: string;
  description: string;
  rooms: number;
  type: string;
  price: string;
  photos: Photos[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  reserves: Reserves[];
}

export interface AppState {
  user: User | null;
  token: string | null;
  reserves: Reserves[];
  theme: string;
}

export const initialState: AppState = {
  user: null,
  token: null,
  reserves: [],
  theme: 'light',
};
