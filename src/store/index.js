import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";

import {
  SET_NAVBAR_ACTIVEITEM,
} from "../utils/constants";

export const StoreContext = createContext();

const initialState = {
  navBar: {
    activeItem: "/",
  }
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
      <StoreContext.Provider value={ value }>
          { props.children }
      </StoreContext.Provider>
    );
}