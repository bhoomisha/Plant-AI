import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../hooks/redux';
import { PLANTS, Plant, Disease } from '../data/plants';

const severityConfig = {
  low: { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', bar: 'bg-green-500', label: '🟢 Low Risk', pct: 25 },
  medium: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', bar: 'bg-yellow-500', label: '🟡 Medium Risk', pct: 55 },
  high: { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', bar: 'bg-red-500', label: '🔴 High Risk', pct: 85 },
};

const DiseaseCard: React.FC<{ disease: Disease; plant: Plant; isDark: boolean }> = ({ disease, plant, isDark }) => {
  const [expanded, setExpanded] = useState(false);
  const cfg = severityConfig[disease.severity];
  const cardBg = isDark ? 'bg-sage-900/60 border-sage-700/40' : 'bg-white border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-sage-900';
  const textSecondary = isDark ? 'text-sage-400' : 'text-gray-500';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${cardBg} border rounded-2xl overflow-hidden`}
    >
      <div className={`${cfg.bg} border-b ${cfg.border} p-4`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color} border ${cfg.border} font-medium`}>
                {cfg.label}
              </span>
            </div>
            <h3 className={`font-semibold ${textPrimary}`}>{disease.name}</h3>
            <p className={`text-xs ${textSecondary} mt-0.5`}>Affects: {plant.name}</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`text-xs px-3 py-1 rounded-lg ${isDark ? 'bg-sage-800 text-sage-300 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-gray-800'} transition-colors`}
          >
            {expanded ? 'Less ▲' : 'Details ▼'}
          </button>
        </div>

        {/* Risk bar */}
        <div className={`mt-3 h-1.5 rounded-full ${isDark ? 'bg-sage-800' : 'bg-gray-200'}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${cfg.pct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className={`h-full rounded-full ${cfg.bar}`}
          />
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-3">
              <div>
                <div className={`text-xs font-medium ${textSecondary} mb-2`}>SYMPTOMS</div>
                <div className="flex flex-wrap gap-1">
                  {disease.symptoms.map((s, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded-lg ${isDark ? 'bg-sage-800/60 text-sage-300' : 'bg-gray-100 text-gray-600'}`}>
                      ⚠️ {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className={`text-xs font-medium ${textSecondary} mb-2`}>TREATMENT</div>
                <div className={`text-sm ${isDark ? 'bg-sage-800/40' : 'bg-gray-50'} rounded-xl p-3 ${textPrimary}`}>
                  <span className="text-forest-400 mr-2">💊</span>
                  {disease.treatment}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Health: React.FC = () => {
  const { isDark } = useAppSelector(s => s.theme);
  const { favorites } = useAppSelector(s => s.plants);
  const [selectedPlantId, setSelectedPlantId] = useState<string>('all');
  const [severityFilter, setSeverityFilter] = useState<string>('all');

  const bg = isDark ? 'bg-sage-950' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-sage-900/60 border-sage-700/40' : 'bg-white border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-sage-900';
  const textSecondary = isDark ? 'text-sage-400' : 'text-gray-500';

  // Build flat list of {disease, plant} pairs
  const allDiseases = PLANTS.flatMap(plant =>
    plant.diseases.map(disease => ({ disease, plant }))
  );

  const filteredDiseases = allDiseases.filter(({ disease, plant }) => {
    if (selectedPlantId !== 'all' && plant.id !== selectedPlantId) return false;
    if (severityFilter !== 'all' && disease.severity !== severityFilter) return false;
    return true;
  });

  const counts = {
    high: allDiseases.filter(d => d.disease.severity === 'high').length,
    medium: allDiseases.filter(d => d.disease.severity === 'medium').length,
    low: allDiseases.filter(d => d.disease.severity === 'low').length,
  };

  const favoritePlants = PLANTS.filter(p => favorites.includes(p.id));

  return (
    <div className={`min-h-screen ${bg} page-transition`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className={`font-display text-3xl sm:text-4xl font-bold ${textPrimary}`}>🦠 Plant Health Analyzer</h1>
          <p className={textSecondary}>Detect diseases, assess risk levels, and find treatments</p>
        </motion.div>

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'High Risk', count: counts.high, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', icon: '🔴' },
            { label: 'Medium Risk', count: counts.medium, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', icon: '🟡' },
            { label: 'Low Risk', count: counts.low, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', icon: '🟢' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSeverityFilter(severityFilter === stat.label.split(' ')[0].toLowerCase() ? 'all' : stat.label.split(' ')[0].toLowerCase())}
              className={`${stat.bg} border ${stat.border} rounded-2xl p-4 cursor-pointer text-center transition-all hover:scale-105 ${
                severityFilter === stat.label.split(' ')[0].toLowerCase() ? 'ring-2 ring-offset-1 ring-offset-transparent' : ''
              }`}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
              <div className={`text-xs ${textSecondary}`}>{stat.label} Diseases</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className={`${cardBg} border rounded-2xl p-4 mb-6 flex flex-wrap gap-3`}>
          <select
            value={selectedPlantId}
            onChange={e => setSelectedPlantId(e.target.value)}
            className={isDark ? 'input-field' : 'input-field-light'}
          >
            <option value="all">🌿 All Plants</option>
            {PLANTS.map(p => (
              <option key={p.id} value={p.id} className={isDark ? 'bg-sage-900' : 'bg-white'}>{p.name}</option>
            ))}
          </select>

          <div className="flex gap-2">
            {['all', 'high', 'medium', 'low'].map(s => (
              <button
                key={s}
                onClick={() => setSeverityFilter(s)}
                className={`px-3 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${
                  severityFilter === s
                    ? 'bg-forest-500 text-white'
                    : isDark ? 'bg-sage-800 text-sage-300 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className={`text-sm ml-auto self-center ${textSecondary}`}>
            {filteredDiseases.length} diseases found
          </div>
        </div>

        {/* Favorite plants health overview */}
        {favoritePlants.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${cardBg} border rounded-2xl p-5 mb-6`}
          >
            <h2 className={`font-semibold mb-4 ${textPrimary}`}>Favorites Health Overview</h2>
            <div className="space-y-3">
              {favoritePlants.map(plant => (
                <div key={plant.id} className="flex items-center gap-3">
                  <div className={`text-sm w-36 truncate flex-shrink-0 ${textPrimary}`}>{plant.name}</div>
                  <div className={`flex-1 h-2 rounded-full ${isDark ? 'bg-sage-800' : 'bg-gray-200'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${plant.healthScore}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        plant.healthScore >= 90 ? 'bg-green-500' :
                        plant.healthScore >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                  <div className={`text-xs w-10 text-right ${
                    plant.healthScore >= 90 ? 'text-green-400' :
                    plant.healthScore >= 75 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {plant.healthScore}%
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Disease cards grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredDiseases.map(({ disease, plant }, i) => (
              <DiseaseCard
                key={`${plant.id}-${disease.name}`}
                disease={disease}
                plant={plant}
                isDark={isDark}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDiseases.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🌱</div>
            <p className={textSecondary}>No diseases match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Health;
