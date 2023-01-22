import { configureStore } from '@reduxjs/toolkit';
import assortment from './assortment';
import advantage from "./advantage";
import navigate from "./navigate";
export default configureStore({
  reducer: {
    assortment: assortment,
    advantage: advantage,
    navigate: navigate
  },
});
