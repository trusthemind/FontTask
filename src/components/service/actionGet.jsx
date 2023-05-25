import { tabsApi } from "./apiSlice";

export const getTabs = () => {
  return {
    type: 'getTabs',
    payload: "gettabs"
  }
};

export const getTabA = () => {
  return {
    type: 'getTabA',
    payload: "gettabsA"
  };
};

export const getTabB = () => {
  return {
    type: 'getTabB',
    payload: "getTabB"

  };
};