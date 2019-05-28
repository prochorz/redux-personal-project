import { createStore } from "redux";

import { enhancedStore, sagaMiddleware } from "./middleware/core";

import { rootReducer } from "./rootReducer";
import { rootSage } from "./rootSage";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSage);