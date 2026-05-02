import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './app/store';
import { useAppSelector } from './hooks/redux';
import Navbar from './components/layout/Navbar';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Plants = lazy(() => import('./pages/Plants'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Scanner = lazy(() => import('./pages/Scanner'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Health = lazy(() => import('./pages/Health'));
const Learn = lazy(() => import('./pages/Learn'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const PageLoader: React.FC = () => {
  const isDark = store.getState().theme.isDark;
  return (
    <div className={`min-h-screen ${isDark ? 'bg-sage-950' : 'bg-gray-50'} flex items-center justify-center`}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-forest-500 border-t-transparent rounded-full animate-spin" />
        <p className={isDark ? 'text-sage-400' : 'text-gray-500'}>Loading...</p>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { isDark } = useAppSelector(s => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.body.className = isDark ? 'bg-sage-950 text-white' : 'bg-gray-50 text-gray-900';
  }, [isDark]);

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-sage-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/health" element={<Health />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  </Provider>
);

export default App;
