import { legacy_createStore } from "@reduxjs/toolkit";
import { myOwnReducer } from "../Redux/Reducer";

export const myOwnStore = legacy_createStore(myOwnReducer);
