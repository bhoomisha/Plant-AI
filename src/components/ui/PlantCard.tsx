import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleFavorite } from '../../features/plants/plantsSlice';
import { Plant } from '../../data/plants';

interface PlantCardProps {
  plant: Plant;
  searchQuery?: string;
}

const highlightText = (text: string, query: string) => {
  if (!query.trim()) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i} className="bg-forest-500/30 text-forest-300 rounded px-0.5">{part}</mark>
      : part
  );
};

const difficultyColor = (d: string) => ({
  beginner: 'bg-green-500/20 text-green-400',
  intermediate: 'bg-yellow-500/20 text-yellow-400',
  expert: 'bg-red-500/20 text-red-400',
}[d] || 'bg-sage-700 text-sage-300');

const sunlightIcon = (s: string) => ({
  'full-sun': '☀️',
  'partial-sun': '⛅',
  'indirect': '🌤️',
  'shade': '🌥️',
}[s] || '🌱');

const typeIcon = (t: string) => ({
  succulent: '🌵', tropical: '🌴', herb: '🌿', flowering: '🌸',
  tree: '🌳', fern: '🌾', cactus: '🌵', vegetable: '🥦', aquatic: '💧',
}[t] || '🌱');

const PlantCard: React.FC<PlantCardProps> = ({ plant, searchQuery = '' }) => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(s => s.theme);
  const favorites = useAppSelector(s => s.plants.favorites);
  const isFav = favorites.includes(plant.id);
  const [expanded, setExpanded] = useState(false);

  const cardBg = isDark ? 'bg-sage-900/60 border-sage-700/40 hover:border-forest-600/50' : 'bg-white border-gray-200 hover:border-forest-400';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`${cardBg} border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Image area */}
      <div className="relative h-44 bg-gradient-to-br from-forest-900/40 to-sage-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-30 select-none">
          {typeIcon(plant.type)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Health score */}
        <div className="absolute top-3 left-3">
          <div className={`text-xs px-2 py-1 rounded-full font-medium ${
            plant.healthScore >= 90 ? 'bg-green-500/80 text-white' :
            plant.healthScore >= 75 ? 'bg-yellow-500/80 text-white' :
            'bg-red-500/80 text-white'
          }`}>
            ♥ {plant.healthScore}%
          </div>
        </div>

        {/* Favorite button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.85 }}
          onClick={(e) => { e.stopPropagation(); dispatch(toggleFavorite(plant.id)); }}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-sm"
        >
          <motion.span
            animate={{ scale: isFav ? [1, 1.4, 1] : 1 }}
            transition={{ duration: 0.3 }}
            className="text-lg"
          >
            {isFav ? '❤️' : '🤍'}
          </motion.span>
        </motion.button>

        {/* Bottom labels */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <h3 className={`font-display font-bold text-white text-base leading-tight`}>
              {highlightText(plant.name, searchQuery)}
            </h3>
            <p className="text-white/60 text-xs italic">{plant.scientificName}</p>
          </div>
          <span className="text-xl">{sunlightIcon(plant.sunlight)}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded-full capitalize ${difficultyColor(plant.difficulty)}`}>
            {plant.difficulty}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full capitalize ${isDark ? 'bg-sage-700/60 text-sage-300' : 'bg-gray-100 text-gray-600'}`}>
            {typeIcon(plant.type)} {plant.type}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-600'}`}>
            💧 {plant.wateringFrequency}
          </span>
        </div>

        <p className={`text-sm line-clamp-2 ${isDark ? 'text-sage-300' : 'text-gray-600'}`}>
          {highlightText(plant.description, searchQuery)}
        </p>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`mt-4 pt-4 border-t ${isDark ? 'border-sage-700/40' : 'border-gray-100'} space-y-3`}>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className={`rounded-lg p-2 ${isDark ? 'bg-sage-800/60' : 'bg-gray-50'}`}>
                    <div className={`${isDark ? 'text-sage-400' : 'text-gray-500'} mb-1`}>Soil</div>
                    <div className={isDark ? 'text-white' : 'text-gray-800'}>{plant.soilType}</div>
                  </div>
                  <div className={`rounded-lg p-2 ${isDark ? 'bg-sage-800/60' : 'bg-gray-50'}`}>
                    <div className={`${isDark ? 'text-sage-400' : 'text-gray-500'} mb-1`}>Temperature</div>
                    <div className={isDark ? 'text-white' : 'text-gray-800'}>{plant.temperature}</div>
                  </div>
                  <div className={`rounded-lg p-2 ${isDark ? 'bg-sage-800/60' : 'bg-gray-50'}`}>
                    <div className={`${isDark ? 'text-sage-400' : 'text-gray-500'} mb-1`}>Humidity</div>
                    <div className={isDark ? 'text-white' : 'text-gray-800'}>{plant.humidity}</div>
                  </div>
                  <div className={`rounded-lg p-2 ${isDark ? 'bg-sage-800/60' : 'bg-gray-50'}`}>
                    <div className={`${isDark ? 'text-sage-400' : 'text-gray-500'} mb-1`}>Watering Tips</div>
                    <div className={`${isDark ? 'text-white' : 'text-gray-800'} line-clamp-2`}>{plant.wateringTips}</div>
                  </div>
                </div>

                <div>
                  <div className={`text-xs font-medium mb-2 ${isDark ? 'text-sage-400' : 'text-gray-500'}`}>Care Tips</div>
                  <ul className="space-y-1">
                    {plant.careInstructions.slice(0, 3).map((tip, i) => (
                      <li key={i} className={`text-xs flex gap-2 ${isDark ? 'text-sage-300' : 'text-gray-600'}`}>
                        <span className="text-forest-400">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className={`text-xs font-medium mb-2 ${isDark ? 'text-sage-400' : 'text-gray-500'}`}>Common Issues</div>
                  <div className="space-y-1">
                    {plant.diseases.slice(0, 2).map((d, i) => (
                      <div key={i} className={`text-xs flex items-center gap-2 p-2 rounded-lg ${isDark ? 'bg-sage-800/60' : 'bg-gray-50'}`}>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          d.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                          d.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>{d.severity}</span>
                        <span className={isDark ? 'text-white' : 'text-gray-800'}>{d.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {plant.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${isDark ? 'bg-forest-900/40 text-forest-400' : 'bg-forest-50 text-forest-700'}`}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
          className={`mt-3 text-xs w-full text-center py-1 rounded-lg ${isDark ? 'text-sage-400 hover:text-forest-400' : 'text-gray-400 hover:text-forest-600'} transition-colors`}
        >
          {expanded ? '▲ Less info' : '▼ More info'}
        </button>
      </div>
    </motion.div>
  );
};

export default PlantCard;
