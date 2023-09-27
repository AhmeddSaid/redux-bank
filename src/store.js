import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

/*
Redux Toolkit Configure Store:
  - Automatically combine reducers.
  - Automatically add the Thunk middleware.
  - Automatically setup the developer tools.
*/

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
