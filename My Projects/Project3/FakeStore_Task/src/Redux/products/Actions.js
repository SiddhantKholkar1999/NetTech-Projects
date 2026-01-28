import { fetchProductsApi } from "../../Utils/Api";
import { PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "./ActionTypes";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetchProductsApi();
      dispatch({ type: PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
