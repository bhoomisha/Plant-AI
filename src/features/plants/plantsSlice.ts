import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Plant } from '../../data/plants';

interface PlantsState {
  favorites: string[];
  searchQuery: string;
  filters: {
    type: string;
    difficulty: string;
    sunlight: string;
  };
  selectedPlant: Plant | null;
}

const savedFavorites = localStorage.getItem('favorites');
const initialState: PlantsState = {
  favorites: savedFavorites ? JSON.parse(savedFavorites) : [],
  searchQuery: '',
  filters: {
    type: '',
    difficulty: '',
    sunlight: '',
  },
  selectedPlant: null,
};

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(f => f !== id);
      } else {
        state.favorites.push(id);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilter: (state, action: PayloadAction<{ key: string; value: string }>) => {
      state.filters[action.payload.key as keyof typeof state.filters] = action.payload.value;
    },
    clearFilters: (state) => {
      state.filters = { type: '', difficulty: '', sunlight: '' };
      state.searchQuery = '';
    },
    setSelectedPlant: (state, action: PayloadAction<Plant | null>) => {
      state.selectedPlant = action.payload;
    },
  },
});

export const { toggleFavorite, setSearchQuery, setFilter, clearFilters, setSelectedPlant } = plantsSlice.actions;
export default plantsSlice.reducer;
