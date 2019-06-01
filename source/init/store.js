import { createStore } from "redux";

//Middleware
import { enhancedStore, sagaMiddleware } from "./middleware/core";

//Roots
import { rootReducer } from "./rootReducer";
import { rootSage } from "./rootSage";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSage);