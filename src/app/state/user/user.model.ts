// src/app/state/user.model.ts

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface AppState {
  users: User[];
}
