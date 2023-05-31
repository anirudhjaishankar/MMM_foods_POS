import type MenuItem from "../lib/models/menu-item";

export const getAllMenuItems = (): Promise<Array<MenuItem>> => {
  return fetch("http://localhost:3000/menu").then((res) => res.json());
};
