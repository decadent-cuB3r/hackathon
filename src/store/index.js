import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";

import {
  SET_NAVBAR_ACTIVEITEM,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  ADD_CART_ITEM,
  SET_RECIPE_DETAIL,
} from "../utils/constants";

export const StoreContext = createContext();
let cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  navBar: {
    activeItem: "/",
  },
  userSignin: {
    loading: false,
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    error: "",
  },
  cartItems,
  recipeDetail: {
    recipe: {},
    qty: 1,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
      };
    case ADD_CART_ITEM:
      const item = action.payload;
      const recipe = state.cartItems.find((x) => x.id === item.id);
      if (recipe) {
        cartItems = state.cartItems.map((x) =>
          x.id === recipe.id ? item : x
        );
        return { ...state, cartItems };
      }
      cartItems = [...state.cartItems, item];
      return { ...state, cartItems };
    case SET_RECIPE_DETAIL:
      return { ...state, recipeDetail: action.payload };
    case BEGIN_LOGIN_REQUEST:
      return { ...state, userSignin: { ...state.userSignin, loading: true } };
    case SUCCESS_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
