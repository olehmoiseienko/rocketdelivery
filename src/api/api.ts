import Order from "../models/Order";
import mocks from '../mocks/orders.json';

const ORDERS_URL = '/orders'

export type Params = {
  zipCode: string
}
export const getOrdersApi = async (params: Params): Promise<Order[] | Error> => {
  console.log("params", params);
  try {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(mocks as Order[]);
      }, 1000)
    });
  } catch (error) {
    return error as Error;
  }
}
