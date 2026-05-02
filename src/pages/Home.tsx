import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppSelector } from '../hooks/redux';

const Home: React.FC = () => {
  const { isDark } = useAppSelector(s => s.theme);
  const { isAuthenticated } = useAppSelector(s => s.auth);

  const features = [
    { icon: '🔍', title: 'AI Plant Scanner', desc: 'Upload any plant photo for instant identification with confidence scoring', link: '/scanner' },
    { icon: '🌿', title: 'Plant Database', desc: 'Browse 53 plants with detailed care guides and disease information', link: '/plants' },
    { icon: '📊', title: 'Live Dashboard', desc: 'Track your scanning history and favorites with real-time analytics', link: '/dashboard' },
    { icon: '🦠', title: 'Health Analyzer', desc: 'Detect plant diseases with severity levels and treatment suggestions', link: '/health' },
    { icon: '❤️', title: 'Favorites', desc: 'Save and organize your favorite plants with persistent storage', link: '/favorites' },
    { icon: '🎓', title: 'Learn', desc: 'Watch plant care videos curated for every plant type', link: '/learn' },
  ];

  const stats = [
    { value: '53+', label: 'Plant Species' },
    { value: '200+', label: 'Care Tips' },
    { value: '99%', label: 'AI Accuracy' },
    { value: '150+', label: 'Diseases Covered' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-sage-950' : 'bg-sage-50'} page-transition`}>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8 }}
              className="absolute text-8xl opacity-5 select-none"
              style={{
                left: `${10 + i * 15}%`,
                top: `${5 + (i % 3) * 30}%`,
              }}
            >
              {['🌱', '🌿', '🍃', '🌸', '🌺', '🌻'][i]}
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-500/10 border border-forest-500/20 text-forest-400 text-sm mb-6">
              <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse" />
              Powered by AI Plant Intelligence
            </div>

            <h1 className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-sage-900'}`}>
              Know Your Plants.{' '}
              <span className="text-forest-400">Grow Smarter.</span>
            </h1>

            <p className={`text-lg sm:text-xl mb-10 max-w-2xl mx-auto ${isDark ? 'text-sage-300' : 'text-sage-600'}`}>
              Instantly identify plants with AI, get personalized care guides, detect diseases early, and build your plant knowledge — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/scanner" className="btn-primary text-base inline-block">
                  🔍 Scan a Plant Free
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/plants" className={`inline-block px-6 py-3 rounded-xl border font-medium text-base transition-colors ${
                  isDark ? 'border-sage-600 text-sage-300 hover:border-forest-500 hover:text-white' : 'border-gray-300 text-gray-700 hover:border-forest-500 hover:text-forest-700'
                }`}>
                  Browse Plants →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-16 px-4 ${isDark ? 'bg-sage-900/40' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-forest-400 mb-1">{stat.value}</div>
              <div className={`text-sm ${isDark ? 'text-sage-400' : 'text-gray-500'}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className={`font-display text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-sage-900'}`}>
              Everything You Need
            </h2>
            <p className={`${isDark ? 'text-sage-400' : 'text-gray-500'}`}>
              A complete plant care intelligence platform
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={f.link}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                    className={`p-6 rounded-2xl border transition-all duration-300 h-full ${
                      isDark ? 'bg-sage-900/60 border-sage-700/40 hover:border-forest-600/50' : 'bg-white border-gray-200 hover:border-forest-400 shadow-sm'
                    }`}
                  >
                    <div className="text-4xl mb-4">{f.icon}</div>
                    <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-sage-900'}`}>{f.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-sage-400' : 'text-gray-500'}`}>{f.desc}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {!isAuthenticated && (
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-12 ${isDark ? 'bg-forest-900/30 border border-forest-700/30' : 'bg-forest-50 border border-forest-200'}`}
            >
              <div className="text-5xl mb-6">🌱</div>
              <h2 className={`font-display text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-sage-900'}`}>
                Start Your Plant Journey
              </h2>
              <p className={`mb-8 ${isDark ? 'text-sage-300' : 'text-gray-600'}`}>
                Create a free account to save favorites, track history, and get personalized recommendations.
              </p>
              <Link to="/signup" className="btn-primary text-base inline-block">
                Create Free Account →
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
