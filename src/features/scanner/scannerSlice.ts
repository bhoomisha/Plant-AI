import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ScanResult {
  id: string;
  plantId: string;
  plantName: string;
  confidence: number;
  timestamp: string;
  imageUrl: string;
  careSummary: string;
}

interface ScannerState {
  scanHistory: ScanResult[];
  currentScan: ScanResult | null;
  isScanning: boolean;
  error: string | null;
}

const savedHistory = localStorage.getItem('scanHistory');
const initialState: ScannerState = {
  scanHistory: savedHistory ? JSON.parse(savedHistory) : [],
  currentScan: null,
  isScanning: false,
  error: null,
};

const scannerSlice = createSlice({
  name: 'scanner',
  initialState,
  reducers: {
    startScan: (state) => {
      state.isScanning = true;
      state.error = null;
      state.currentScan = null;
    },
    scanSuccess: (state, action: PayloadAction<ScanResult>) => {
      state.isScanning = false;
      state.currentScan = action.payload;
      state.scanHistory.unshift(action.payload);
      if (state.scanHistory.length > 20) {
        state.scanHistory = state.scanHistory.slice(0, 20);
      }
      localStorage.setItem('scanHistory', JSON.stringify(state.scanHistory));
    },
    scanFailure: (state, action: PayloadAction<string>) => {
      state.isScanning = false;
      state.error = action.payload;
    },
    clearCurrentScan: (state) => {
      state.currentScan = null;
      state.error = null;
    },
    clearHistory: (state) => {
      state.scanHistory = [];
      localStorage.removeItem('scanHistory');
    },
  },
});

export const { startScan, scanSuccess, scanFailure, clearCurrentScan, clearHistory } = scannerSlice.actions;
export default scannerSlice.reducer;
