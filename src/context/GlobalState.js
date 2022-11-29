import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Paycheck", amount: 1963 },
    { id: 2, text: "Ugly Sweater", amount: -31 },
    { id: 3, text: "Cat Scatching Post", amount: -30 },
    { id: 4, text: "Chipotle", amount: 24.31 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <GlobalContext.Provider value={{
    transactions: state.transactions
  }}>{children}</GlobalContext.Provider>;
};
