// Dinh nghia action type & action creator

import { DECREMENT, INCREMENT } from "./types";

export const incrementFn = () => {
  return { type: INCREMENT };
};

export const decrementFn = () => {
  return { type: DECREMENT };
};