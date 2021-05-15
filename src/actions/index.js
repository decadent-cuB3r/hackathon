import { 
  SET_NAVBAR_ACTIVEITEM,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  ADD_CART_ITEM,
  SET_RECIPE_DETAIL,
} from "../utils/constants";

import recipes from "../json/recipes.json";

import {
  signInWithEmailPassword
} from "../api";

export const activeNavItemSet = (dispatch, activeNavItem) => {
  dispatch({
    type: SET_NAVBAR_ACTIVEITEM,
    payload: activeNavItem,
  });
};

export const addCartItem = (dispatch, recipe, qty) => {
  const item = {
    id: recipe.id,
    name: recipe.name,
    image: recipe.image,
    price: recipe.price,
    countInStock: recipe.countInStock,
    qty,
  };
  dispatch({
    type: ADD_CART_ITEM,
    payload: item,
  });
};

export const setRecipeDetail = (dispatch, recipeId, qty) => {
  const recipe = recipes.find(
    x => x.id === recipeId
  );
  
  if(qty === 0 && recipe.countInStock > 0)
      qty = 1;

  dispatch({
    type: SET_RECIPE_DETAIL,
    payload: {
      recipe,
      qty,
    }
  })
}

export const loginToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_LOGIN_REQUEST });
  try {
    const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
    dispatch({
      type: SUCCESS_LOGIN_REQUEST,
      payload: user.user.providerData[0],
    })
    console.log("success");
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_LOGIN_REQUEST,
      payload: e.message
    })
    console.log(e)
    return null;
  }
}