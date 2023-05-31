export default interface Order {
  _id: string;
  customer: {
    name: string;
    phone: string;
  };
  orderNumber: number;
  orderItems: [
    {
      itemId: string;
      quantity: number;
    }
  ];
  total: number;
  comments: string;
  orderDate: Date;
}
