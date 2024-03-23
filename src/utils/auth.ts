import { storageKey } from "../constants/storageKey";
import { User } from "../types/user.type";

export const getAccessTokenFromLS = (): string | null => {
  return localStorage.getItem(storageKey.TOKEN);
};

export const saveAccessTokenToLs = (token: string) => {
  localStorage.setItem(storageKey.TOKEN, token);
};

export const getUserFromLS = (): User | null => {
  const user = localStorage.getItem(storageKey.USER);
  return user === null ? null : JSON.parse(user);
};

export const saveUserToLS = (user: User | string) => {
  localStorage.setItem(storageKey.USER, JSON.stringify(user));
};
