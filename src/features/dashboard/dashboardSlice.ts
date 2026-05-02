import { createSlice } from '@reduxjs/toolkit';

interface ActivityEntry {
  date: string;
  scans: number;
  favorites: number;
}

interface DashboardState {
  activityData: ActivityEntry[];
}

// Generate last 7 days of activity data
const generateActivityData = (): ActivityEntry[] => {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push({
      date: d.toLocaleDateString('en-US', { weekday: 'short' }),
      scans: Math.floor(Math.random() * 8) + 1,
      favorites: Math.floor(Math.random() * 5),
    });
  }
  return days;
};

const savedActivity = localStorage.getItem('activityData');
const initialState: DashboardState = {
  activityData: savedActivity ? JSON.parse(savedActivity) : generateActivityData(),
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    incrementTodayScans: (state) => {
      const today = state.activityData[state.activityData.length - 1];
      if (today) {
        today.scans += 1;
        localStorage.setItem('activityData', JSON.stringify(state.activityData));
      }
    },
    incrementTodayFavorites: (state) => {
      const today = state.activityData[state.activityData.length - 1];
      if (today) {
        today.favorites += 1;
        localStorage.setItem('activityData', JSON.stringify(state.activityData));
      }
    },
  },
});

export const { incrementTodayScans, incrementTodayFavorites } = dashboardSlice.actions;
export default dashboardSlice.reducer;