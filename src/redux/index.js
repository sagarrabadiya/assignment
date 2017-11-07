import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import rootReducer from "./modules";
const enhancers = [persistState()];
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(...enhancers);

export default initialState =>
  createStore(rootReducer, initialState, composedEnhancers);
