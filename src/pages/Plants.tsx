import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSearchQuery, setFilter, clearFilters } from '../features/plants/plantsSlice';
import { plantApi } from '../services/plantApi';
import { PLANTS } from '../data/plants';
import PlantCard from '../components/ui/PlantCard';
import { PlantCardSkeleton } from '../components/ui/Skeleton';

const Plants: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(s => s.theme);
  const { searchQuery, filters } = useAppSelector(s => s.plants);
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const { data: plantsData, isLoading } = useQuery({
    queryKey: ['plants'],
    queryFn: () => plantApi.getAllPlants(),
    staleTime: 5 * 60 * 1000,
  });

  // Debounce search
  const handleSearch = useCallback((value: string) => {
    setLocalSearch(value);
    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(() => {
      dispatch(setSearchQuery(value));
    }, 300);
    setDebounceTimer(timer);
  }, [dispatch, debounceTimer]);

  const filteredPlants = useMemo(() => {
    let results = plantsData?.data || PLANTS;
    const q = searchQuery.toLowerCase().trim();

    if (q) {
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.scientificName.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q)) ||
        p.description.toLowerCase().includes(q) ||
        p.type.includes(q)
      );
    }
    if (filters.type) results = results.filter(p => p.type === filters.type);
    if (filters.difficulty) results = results.filter(p => p.difficulty === filters.difficulty);
    if (filters.sunlight) results = results.filter(p => p.sunlight === filters.sunlight);

    return results;
  }, [plantsData, searchQuery, filters]);

  const hasFilters = searchQuery || filters.type || filters.difficulty || filters.sunlight;
  const bg = isDark ? 'bg-sage-950' : 'bg-sage-50';
  const cardBg = isDark ? 'bg-sage-900/60 border-sage-700/40' : 'bg-white border-gray-200';
  const inputStyle = isDark ? 'input-field w-full' : 'input-field-light w-full';

  const filterSelect = (key: string, value: string, placeholder: string, options: string[]) => (
    <select
      value={value}
      onChange={e => dispatch(setFilter({ key, value: e.target.value }))}
      className={`${inputStyle} appearance-none cursor-pointer`}
    >
      <option value="">{placeholder}</option>
      {options.map(o => (
        <option key={o} value={o} className={isDark ? 'bg-sage-900' : 'bg-white'}>
          {o.charAt(0).toUpperCase() + o.slice(1).replace('-', ' ')}
        </option>
      ))}
    </select>
  );

  return (
    <div className={`min-h-screen ${bg} page-transition`}>
      {/* Header */}
      <div className={`border-b ${isDark ? 'border-sage-800/50 bg-sage-950/80' : 'border-gray-200 bg-white/80'} backdrop-blur-md sticky top-16 z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search plants by name, type, or tags..."
                value={localSearch}
                onChange={e => handleSearch(e.target.value)}
                className={`${inputStyle} pl-10`}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              {filterSelect('type', filters.type, '🌿 Type', ['succulent', 'tropical', 'herb', 'flowering', 'tree', 'fern', 'cactus', 'vegetable'])}
              {filterSelect('difficulty', filters.difficulty, '⭐ Difficulty', ['beginner', 'intermediate', 'expert'])}
              {filterSelect('sunlight', filters.sunlight, '☀️ Sunlight', ['full-sun', 'partial-sun', 'indirect', 'shade'])}

              {hasFilters && (
                <button
                  onClick={() => { dispatch(clearFilters()); setLocalSearch(''); }}
                  className="px-3 py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors text-sm whitespace-nowrap"
                >
                  ✕ Clear
                </button>
              )}
            </div>
          </div>

          <div className={`mt-2 text-xs ${isDark ? 'text-sage-400' : 'text-gray-500'}`}>
            {isLoading ? 'Loading...' : `${filteredPlants.length} plants found`}
            {hasFilters && <span className="ml-2 text-forest-400">• Filtered</span>}
          </div>
        </div>
      </div>

      {/* Plants grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[...Array(8)].map((_, i) => <PlantCardSkeleton key={i} isDark={isDark} />)}
          </div>
        ) : filteredPlants.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🌵</div>
            <h3 className={`font-display text-2xl mb-2 ${isDark ? 'text-white' : 'text-sage-900'}`}>No plants found</h3>
            <p className={`${isDark ? 'text-sage-400' : 'text-gray-500'} mb-6`}>Try adjusting your search or filters</p>
            <button onClick={() => { dispatch(clearFilters()); setLocalSearch(''); }} className="btn-primary">
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence>
              {filteredPlants.map(plant => (
                <PlantCard key={plant.id} plant={plant} searchQuery={searchQuery} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Plants;
