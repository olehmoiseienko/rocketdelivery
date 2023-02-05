import Order from '../models/Order';
import mocks from '../mocks/orders.json';

const ORDERS_URL = '/orders';

export type Params = {
  orderNumber: string;
  zipCode: string;
};
export const getOrdersApi = async (params: Params): Promise<Order[] | Error> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = mocks.find((order) => order.tracking_number === params.orderNumber);

      if (!order) {
        return reject(`The ${params.orderNumber} order number is not found.`);
      }

      if (order.zip_code !== params.zipCode) {
        return reject(`The ${params.zipCode} zip code is not correct.`);
      }

      if (order) {
        // @ts-ignore
        resolve(order);
      }
    }, 1000);
  });
};
