import React, { createContext, useContext, useReducer } from 'react';
import {OrderAction, OrderState, OrderReducer} from "../reducers/orderReducer";
import {getOrdersApi, Params} from "../api/api";

const initialState: OrderState = {
  isLoading: false,
  currentOrder: null,
};

export type ContextProps = {
  state: OrderState
  getOrders: (params: Params) => Promise<any>;
};
type ComponentProviderProps = {
  children?: React.ReactNode;
};

export const OrderContext = createContext<ContextProps>({
  state: initialState,
  getOrders: async () => {},
  }
);

export const OrderProvider = ({ children }: ComponentProviderProps) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const getOrders = async (params: Params) => {
    dispatch({ type: OrderAction.IS_LOADING, payload: true });
    const response = await getOrdersApi({zipCode: params.zipCode});
    if (response instanceof Error) {
      return
    }

    const currentOrder = Array.isArray(response) ? response[0] : response;

    dispatch({
      type: OrderAction.SET_ORDERS,
      payload: currentOrder,
    });
    dispatch({ type: OrderAction.IS_LOADING, payload: false });
  };


  return (
    <OrderContext.Provider value={{state, getOrders}}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const {
    state,
    getOrders,
  } = useContext(OrderContext);
  return {
    isLoading: state.isLoading,
    currentOrder: state.currentOrder,
    getOrders,
  };
};
