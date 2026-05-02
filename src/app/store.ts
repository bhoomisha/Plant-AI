import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import plantsReducer from '../features/plants/plantsSlice';
import scannerReducer from '../features/scanner/scannerSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plants: plantsReducer,
    scanner: scannerReducer,
    dashboard: dashboardReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
