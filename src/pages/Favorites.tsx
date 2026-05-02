import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { PLANTS } from '../data/plants';
import PlantCard from '../components/ui/PlantCard';

const Favorites: React.FC = () => {
  const { isDark } = useAppSelector(s => s.theme);
  const { favorites } = useAppSelector(s => s.plants);
  const favoritePlants = PLANTS.filter(p => favorites.includes(p.id));

  const bg = isDark ? 'bg-sage-950' : 'bg-gray-50';
  const textPrimary = isDark ? 'text-white' : 'text-sage-900';
  const textSecondary = isDark ? 'text-sage-400' : 'text-gray-500';

  // Group by type
  const byType = favoritePlants.reduce((acc, p) => {
    if (!acc[p.type]) acc[p.type] = [];
    acc[p.type].push(p);
    return acc;
  }, {} as Record<string, typeof favoritePlants>);

  return (
    <div className={`min-h-screen ${bg} page-transition`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className={`font-display text-3xl sm:text-4xl font-bold ${textPrimary}`}>
            ❤️ Your Favorites
          </h1>
          <p className={textSecondary}>
            {favoritePlants.length} plant{favoritePlants.length !== 1 ? 's' : ''} saved
          </p>
        </motion.div>

        {favoritePlants.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl mb-6"
            >
              🤍
            </motion.div>
            <h2 className={`font-display text-2xl font-bold mb-3 ${textPrimary}`}>No favorites yet</h2>
            <p className={`${textSecondary} mb-8 max-w-sm mx-auto`}>
              Browse plants and tap the heart icon to save your favorites here
            </p>
            <Link to="/plants" className="btn-primary inline-block">
              Browse Plants →
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-10">
            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { label: 'Total Saved', value: favoritePlants.length, icon: '❤️' },
                { label: 'Plant Types', value: Object.keys(byType).length, icon: '🌿' },
                { label: 'Beginner', value: favoritePlants.filter(p => p.difficulty === 'beginner').length, icon: '🟢' },
                { label: 'Avg Health', value: `${Math.round(favoritePlants.reduce((a, p) => a + p.healthScore, 0) / favoritePlants.length)}%`, icon: '♥' },
              ].map((stat, i) => (
                <div key={i} className={`rounded-2xl border p-4 text-center ${isDark ? 'bg-sage-900/60 border-sage-700/40' : 'bg-white border-gray-200'}`}>
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className={`text-2xl font-bold ${textPrimary}`}>{stat.value}</div>
                  <div className={`text-xs ${textSecondary}`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Plants by type */}
            {Object.entries(byType).map(([type, plants], groupIdx) => (
              <motion.section
                key={type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIdx * 0.1 }}
              >
                <h2 className={`font-display text-xl font-semibold mb-4 capitalize flex items-center gap-2 ${textPrimary}`}>
                  <span>{type === 'succulent' ? '🌵' : type === 'herb' ? '🌿' : type === 'flowering' ? '🌸' : type === 'tree' ? '🌳' : type === 'fern' ? '🌾' : '🌴'}</span>
                  {type}
                  <span className={`text-sm font-normal ${textSecondary}`}>({plants.length})</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  <AnimatePresence>
                    {plants.map(plant => (
                      <PlantCard key={plant.id} plant={plant} />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
