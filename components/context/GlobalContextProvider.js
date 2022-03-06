import React from "react";

const InitialState = {
  cartCount: 0,
  cartItems: [],
  theme: "dark",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOTAL_CART_COUNT":
      return {
        ...state,
        cartCount: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalContext = React.createContext({
  globalState: InitialState,
  globalDispatchActions: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [globalState, globalDispatch] = React.useReducer(reducer, InitialState);
  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

/* 
import React from "react";
// uuid
import { v4 as uuidV4 } from "uuid";
//TODO: Add types to uuid

interface ToastAlertIterface {
  id?: string;
  kind: "success" | "warning";
  heading: string;
  description: string | React.ReactNode;
}

interface InitialStateInterface {
  // admin side
  sidebarToggle: boolean;
  toggleRightSidebar: boolean;
  // render side
  renderNavbarToggle: boolean;
  renderSidebarToggle: boolean;
  // toast alerts
  toastAlert: ToastAlertIterface[];
}

type Action =
  | { type: "SIDEBAR_TOGGLE"; payload: boolean }
  | { type: "TOGGLE_RIGHT_SIDEBAR"; payload: boolean }
  | { type: "RENDER_NAVBAR_TOGGLE"; payload: boolean }
  | { type: "RENDER_SIDEBAR_TOGGLE"; payload: boolean }
  | {
      type: "ADD_TOAST_ALERT";
      payload: ToastAlertIterface;
    }
  | { type: "REMOVE_TOAST_ALERT"; payload: ToastAlertIterface };

const initialState = {
  sidebarToggle: false,
  toggleRightSidebar: false,
  renderNavbarToggle: false,
  renderSidebarToggle: false,
  toastAlert: [],
};

export const globalContext = React.createContext<{
  globalState: InitialStateInterface;
  globalDispatch: React.Dispatch<Action>;
}>({ globalState: initialState, globalDispatch: () => {} });

const reducer = (state: InitialStateInterface, action: Action) => {
  switch (action.type) {
    // admin side
    case "SIDEBAR_TOGGLE":
      return {
        ...state,
        sidebarToggle: action.payload,
      };
    case "TOGGLE_RIGHT_SIDEBAR":
      return {
        ...state,
        toggleRightSidebar: action.payload,
      };
    // render side
    case "RENDER_NAVBAR_TOGGLE":
      return {
        ...state,
        renderNavbarToggle: action.payload,
      };
    case "RENDER_SIDEBAR_TOGGLE":
      return {
        ...state,
        renderSidebarToggle: action.payload,
      };
    case "ADD_TOAST_ALERT":
      action.payload["id"] = uuidV4();
      return {
        ...state,
        toastAlert: [...state.toastAlert, action.payload],
      };
    case "REMOVE_TOAST_ALERT":
      return {
        ...state,
        toastAlert: state.toastAlert.filter((item, i) => item.id != action.payload.id),
      };
    default:
      return state;
  }
};

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [globalState, globalDispatch] = React.useReducer(reducer, initialState);
  return (
    <globalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </globalContext.Provider>
  );
};

*/
