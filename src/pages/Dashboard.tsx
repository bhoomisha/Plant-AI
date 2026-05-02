import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend
} from 'recharts';
import { useAppSelector } from '../hooks/redux';
import { PLANTS } from '../data/plants';
import { DashboardStatSkeleton } from '../components/ui/Skeleton';

const Dashboard: React.FC = () => {
  const { isDark } = useAppSelector(s => s.theme);
  const { scanHistory } = useAppSelector(s => s.scanner);
  const { favorites } = useAppSelector(s => s.plants);
  const { activityData } = useAppSelector(s => s.dashboard);
  const { user } = useAppSelector(s => s.auth);

  const favoritePlants = PLANTS.filter(p => favorites.includes(p.id));
  const avgHealthScore = favoritePlants.length
    ? Math.round(favoritePlants.reduce((acc, p) => acc + p.healthScore, 0) / favoritePlants.length)
    : 0;

  const bg = isDark ? 'bg-sage-950' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-sage-900/60 border-sage-700/40' : 'bg-white border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-sage-900';
  const textSecondary = isDark ? 'text-sage-400' : 'text-gray-500';
  const gridColor = isDark ? '#2a3c2a' : '#e5e7eb';
  const tickColor = isDark ? '#84a384' : '#9ca3af';

  const stats = [
    { icon: '🔍', label: 'Total Scans', value: scanHistory.length, change: '+3 today', color: 'forest' },
    { icon: '❤️', label: 'Favorites', value: favorites.length, change: `${favoritePlants.filter(p => p.type === 'tropical').length} tropical`, color: 'red' },
    { icon: '♥', label: 'Avg Health Score', value: `${avgHealthScore}%`, change: 'Across favorites', color: 'green' },
    { icon: '🌿', label: 'Plant Types', value: Array.from(new Set(favoritePlants.map(p => p.type))).length, change: 'Different species', color: 'blue' },
  ];

  // Disease distribution from favorites
  const diseaseSeverity = {
    high: favoritePlants.reduce((acc, p) => acc + p.diseases.filter(d => d.severity === 'high').length, 0),
    medium: favoritePlants.reduce((acc, p) => acc + p.diseases.filter(d => d.severity === 'medium').length, 0),
    low: favoritePlants.reduce((acc, p) => acc + p.diseases.filter(d => d.severity === 'low').length, 0),
  };

  const recentScans = scanHistory.slice(0, 5);

  return (
    <div className={`min-h-screen ${bg} page-transition`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className={`font-display text-3xl sm:text-4xl font-bold ${textPrimary}`}>
            Welcome back, {user?.name || 'Plant Enthusiast'} 🌱
          </h1>
          <p className={`mt-1 ${textSecondary}`}>Here's what's happening with your plants today</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${cardBg} border rounded-2xl p-5`}
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className={`text-2xl sm:text-3xl font-bold ${textPrimary} mb-1`}>{stat.value}</div>
              <div className={`text-sm font-medium ${textPrimary} mb-0.5`}>{stat.label}</div>
              <div className={`text-xs ${textSecondary}`}>{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Activity chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`${cardBg} border rounded-2xl p-6`}
          >
            <h2 className={`font-semibold text-lg mb-4 ${textPrimary}`}>Weekly Activity</h2>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="favGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="date" tick={{ fill: tickColor, fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: tickColor, fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: isDark ? '#1a2c1a' : '#fff',
                    border: `1px solid ${isDark ? '#3b523b' : '#e5e7eb'}`,
                    borderRadius: 12,
                    color: isDark ? '#fff' : '#111',
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey="scans" stroke="#22c55e" fill="url(#scanGrad)" strokeWidth={2} name="Scans" />
                <Area type="monotone" dataKey="favorites" stroke="#ef4444" fill="url(#favGrad)" strokeWidth={2} name="Favorites" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Health distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`${cardBg} border rounded-2xl p-6`}
          >
            <h2 className={`font-semibold text-lg mb-4 ${textPrimary}`}>Disease Risk (Favorites)</h2>
            {favoritePlants.length === 0 ? (
              <div className={`flex items-center justify-center h-[220px] ${textSecondary} text-sm`}>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌿</div>
                  Add favorites to see disease risk analysis
                </div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={[
                  { name: 'High Risk', count: diseaseSeverity.high, fill: '#ef4444' },
                  { name: 'Medium Risk', count: diseaseSeverity.medium, fill: '#f59e0b' },
                  { name: 'Low Risk', count: diseaseSeverity.low, fill: '#22c55e' },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="name" tick={{ fill: tickColor, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: tickColor, fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: isDark ? '#1a2c1a' : '#fff',
                      border: `1px solid ${isDark ? '#3b523b' : '#e5e7eb'}`,
                      borderRadius: 12,
                      color: isDark ? '#fff' : '#111',
                    }}
                  />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                    {[
                      { fill: '#ef4444' }, { fill: '#f59e0b' }, { fill: '#22c55e' }
                    ].map((entry, i) => (
                      <rect key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent scans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`${cardBg} border rounded-2xl p-6`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className={`font-semibold text-lg ${textPrimary}`}>Recent Scans</h2>
              {recentScans.length > 0 && (
                <a href="/scanner" className="text-forest-400 text-sm hover:text-forest-300">View all →</a>
              )}
            </div>
            {recentScans.length === 0 ? (
              <div className={`text-center py-8 ${textSecondary} text-sm`}>
                <div className="text-3xl mb-2">🔍</div>
                No scans yet. Try the scanner!
              </div>
            ) : (
              <div className="space-y-3">
                {recentScans.map((scan, i) => (
                  <motion.div
                    key={scan.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 p-3 rounded-xl ${isDark ? 'bg-sage-800/40' : 'bg-gray-50'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-forest-900/60' : 'bg-forest-100'} flex items-center justify-center text-xl`}>
                      🌿
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium text-sm truncate ${textPrimary}`}>{scan.plantName}</div>
                      <div className={`text-xs ${textSecondary}`}>{new Date(scan.timestamp).toLocaleDateString()}</div>
                    </div>
                    <div className={`text-sm font-medium ${scan.confidence >= 85 ? 'text-green-400' : scan.confidence >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {scan.confidence}%
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Favorite plants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`${cardBg} border rounded-2xl p-6`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className={`font-semibold text-lg ${textPrimary}`}>Your Favorites</h2>
              {favoritePlants.length > 0 && (
                <a href="/favorites" className="text-forest-400 text-sm hover:text-forest-300">View all →</a>
              )}
            </div>
            {favoritePlants.length === 0 ? (
              <div className={`text-center py-8 ${textSecondary} text-sm`}>
                <div className="text-3xl mb-2">❤️</div>
                No favorites yet. Heart a plant!
              </div>
            ) : (
              <div className="space-y-3">
                {favoritePlants.slice(0, 5).map((plant, i) => (
                  <motion.div
                    key={plant.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 p-3 rounded-xl ${isDark ? 'bg-sage-800/40' : 'bg-gray-50'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-forest-900/60' : 'bg-forest-100'} flex items-center justify-center text-xl`}>
                      {plant.type === 'succulent' ? '🌵' : plant.type === 'herb' ? '🌿' : plant.type === 'flowering' ? '🌸' : '🌴'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium text-sm truncate ${textPrimary}`}>{plant.name}</div>
                      <div className={`text-xs ${textSecondary} capitalize`}>{plant.type} • {plant.difficulty}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      plant.healthScore >= 90 ? 'bg-green-500/20 text-green-400' :
                      plant.healthScore >= 75 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      ♥ {plant.healthScore}%
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
