import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const contactsPeristConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const filtersPersistConfig = {
  key: "filters",
  storage,
  whitelist: ["name"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPeristConfig, contactsReducer),
    filters: persistReducer(filtersPersistConfig, filtersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


