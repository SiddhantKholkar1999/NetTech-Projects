import { legacy_createStore } from "@reduxjs/toolkit";
import { initialValue, Reducer } from "./Reducer";

export const myStore = legacy_createStore(Reducer, initialValue);
