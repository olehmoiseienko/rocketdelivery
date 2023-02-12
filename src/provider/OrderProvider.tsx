import React, { createContext, useContext, useReducer } from 'react';
import { OrderAction, OrderState, OrderReducer } from '../reducers/orderReducer';
import { getOrdersApi, Params } from '../api/api';

const initialState: OrderState = {
  isLoading: false,
  currentOrder: null,
  error: ''
};

export type ContextProps = {
  state: OrderState;
  getOrders: (params: Params) => Promise<any>;
  resetOrderData: () => void;
};
type ComponentProviderProps = {
  children?: React.ReactElement;
};

export const OrderContext = createContext<ContextProps>({
  state: initialState,
  getOrders: async () => {},
  resetOrderData: () => {}
});

export const OrderProvider = ({ children }: ComponentProviderProps) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const getOrders = async (params: Params) => {
    dispatch({ type: OrderAction.IS_LOADING, payload: true });
    dispatch({ type: OrderAction.SET_ERROR, payload: '' });

    try {
      const response = await getOrdersApi(params);
      if (response instanceof Error) {
        throw response;
      }

      const currentOrder = Array.isArray(response) ? response[0] : response;

      dispatch({
        type: OrderAction.SET_ORDERS,
        payload: currentOrder
      });
    } catch (e: unknown) {
      dispatch({ type: OrderAction.SET_ERROR, payload: (e as Error).toString() });
    } finally {
      dispatch({ type: OrderAction.IS_LOADING, payload: false });
    }
  };

  const resetOrderData = () => {
    dispatch({ type: OrderAction.RESET_ORDER_DATA });
  };

  return (
    <OrderContext.Provider value={{ state, getOrders, resetOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const { state, getOrders, resetOrderData } = useContext(OrderContext);
  return {
    state,
    isLoading: state.isLoading,
    currentOrder: state.currentOrder,
    error: state.error,
    getOrders,
    resetOrderData
  };
};

export default useOrderContext;
