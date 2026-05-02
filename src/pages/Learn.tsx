import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../hooks/redux';
import { PLANTS } from '../data/plants';

const YOUTUBE_VIDEOS = [
  { id: 'dPygZovzj4o', title: 'Ultimate Houseplant Care Guide', plant: 'General', type: 'tropical', duration: '18:24' },
  { id: 'VD3GCB7_4Sg', title: 'Monstera Deliciosa Complete Care', plant: 'Monstera', type: 'tropical', duration: '12:05' },
  { id: 'YQXZK3HHxS8', title: 'Succulent Care for Beginners', plant: 'Succulents', type: 'succulent', duration: '14:30' },
  { id: 'QKwO2v4MnAw', title: 'How to Water Your Plants (The Right Way)', plant: 'General', type: 'tropical', duration: '10:12' },
  { id: 'jAkqSqRW1bI', title: 'Snake Plant: The Unkillable Plant', plant: 'Snake Plant', type: 'tropical', duration: '9:45' },
  { id: 'h4MdPSPPYSQ', title: 'Growing Herbs Indoors', plant: 'Herbs', type: 'herb', duration: '16:20' },
  { id: 'JRFbQP3GVSA', title: 'Fixing Yellow Leaves on Houseplants', plant: 'General', type: 'tropical', duration: '8:15' },
  { id: 'r1UmRGMhZUM', title: 'How to Propagate Plants Easily', plant: 'General', type: 'tropical', duration: '20:10' },
  { id: 'yf0_3IXPG3c', title: 'Cactus and Succulent Care Guide', plant: 'Cactus', type: 'cactus', duration: '13:55' },
  { id: 'PD3GLSQ05AM', title: 'Peace Lily Complete Care Guide', plant: 'Peace Lily', type: 'tropical', duration: '11:30' },
  { id: 'VJkmq_WZXGE', title: 'Pothos Plant: Beginner to Expert', plant: 'Pothos', type: 'tropical', duration: '15:05' },
  { id: 'EYzN3MdnFBw', title: 'Growing Lavender Successfully', plant: 'Lavender', type: 'herb', duration: '12:40' },
];

const VideoCard: React.FC<{
  video: typeof YOUTUBE_VIDEOS[0];
  isDark: boolean;
  onPlay: (id: string) => void;
  isPlaying: boolean;
}> = ({ video, isDark, onPlay, isPlaying }) => {
  const [hovered, setHovered] = useState(false);
  const cardBg = isDark ? 'bg-sage-900/60 border-sage-700/40' : 'bg-white border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-sage-900';
  const textSecondary = isDark ? 'text-sage-400' : 'text-gray-500';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`${cardBg} border rounded-2xl overflow-hidden cursor-pointer transition-shadow hover:shadow-xl`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(video.id)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-sage-900 overflow-hidden">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <motion.div
              animate={{ opacity: hovered ? 1 : 0.6 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: hovered ? 1.15 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl ml-1">▶</span>
              </motion.div>
            </motion.div>
            {/* Duration badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
              {video.duration}
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className={`font-medium text-sm leading-snug mb-2 line-clamp-2 ${textPrimary}`}>{video.title}</h3>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${isDark ? 'bg-sage-800 text-sage-300' : 'bg-gray-100 text-gray-600'} capitalize`}>
            {video.plant}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${
            video.type === 'succulent' ? 'bg-green-500/20 text-green-400' :
            video.type === 'herb' ? 'bg-lime-500/20 text-lime-400' :
            video.type === 'cactus' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-blue-500/20 text-blue-400'
          }`}>
            {video.type}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Learn: React.FC = () => {
  const { isDark } = useAppSelector(s => s.theme);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState('all');

  const bg = isDark ? 'bg-sage-950' : 'bg-gray-50';
  const textPrimary = isDark ? 'text-white' : 'text-sage-900';
  const textSecondary = isDark ? 'text-sage-400' : 'text-gray-500';

  const types = ['all', 'tropical', 'succulent', 'herb', 'cactus'];
  const filtered = typeFilter === 'all' ? YOUTUBE_VIDEOS : YOUTUBE_VIDEOS.filter(v => v.type === typeFilter);

  return (
    <div className={`min-h-screen ${bg} page-transition`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className={`font-display text-3xl sm:text-4xl font-bold ${textPrimary}`}>🎓 Plant Learning Center</h1>
          <p className={textSecondary}>Video guides for every plant type and care situation</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {types.map(type => (
            <button
              key={type}
              onClick={() => { setTypeFilter(type); setPlayingId(null); }}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                typeFilter === type
                  ? 'bg-forest-500 text-white shadow-lg shadow-forest-500/30'
                  : isDark ? 'bg-sage-800/60 text-sage-300 hover:text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-forest-400'
              }`}
            >
              {type === 'all' ? '🌿 All' :
               type === 'tropical' ? '🌴 Tropical' :
               type === 'succulent' ? '🌵 Succulents' :
               type === 'herb' ? '🌱 Herbs' : '🌵 Cacti'}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {filtered.map(video => (
              <VideoCard
                key={video.id}
                video={video}
                isDark={isDark}
                isPlaying={playingId === video.id}
                onPlay={(id) => setPlayingId(playingId === id ? null : id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Learning tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`mt-12 rounded-2xl border p-6 ${isDark ? 'bg-forest-900/20 border-forest-700/30' : 'bg-forest-50 border-forest-200'}`}
        >
          <h2 className={`font-display text-xl font-bold mb-4 ${textPrimary}`}>🌱 Quick Care Tips</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '💧', tip: 'Water in the morning to allow foliage to dry during the day, preventing fungal issues.' },
              { icon: '☀️', tip: 'Rotate plants quarterly so all sides get equal light exposure for even growth.' },
              { icon: '🌡️', tip: 'Most houseplants prefer 65-75°F. Avoid cold drafts and heating vents.' },
              { icon: '✂️', tip: 'Prune dead leaves and stems to encourage new growth and prevent disease spread.' },
              { icon: '🪴', tip: 'Repot when roots circle the bottom or escape drainage holes — spring is best.' },
              { icon: '🧪', tip: 'Feed with balanced fertilizer monthly in spring/summer. Rest in fall/winter.' },
            ].map((item, i) => (
              <div key={i} className={`flex gap-3 p-3 rounded-xl ${isDark ? 'bg-sage-900/40' : 'bg-white'}`}>
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className={`text-sm leading-relaxed ${textSecondary}`}>{item.tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Learn;
