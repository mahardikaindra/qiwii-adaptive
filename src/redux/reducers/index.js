import { combineReducers } from "redux";
import * as HomeReducer from "../collections/Home/reducer";
import * as MerchantReducer from "../collections/Merchant/reducer";

const appReducers = combineReducers(
  Object.assign(HomeReducer, MerchantReducer)
);

export default appReducers;
