import type Order from "lib/models/order";

export const getAllOrders = (): Promise<Array<Order>> => {
  return fetch("http://localhost:3000/order").then((res) => res.json());
};
