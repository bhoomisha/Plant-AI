import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { startScan, scanSuccess, scanFailure, clearCurrentScan, clearHistory } from '../features/scanner/scannerSlice';
import { incrementTodayScans } from '../features/dashboard/dashboardSlice';
import { plantApi } from '../services/plantApi';
import { PLANTS } from '../data/plants';

const Scanner: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(s => s.theme);
  const { isScanning, currentScan, scanHistory, error } = useAppSelector(s => s.scanner);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const bg = isDark ? 'bg-sage-950' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-sage-900/60 border-sage-700/40' : 'bg-white border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-sage-900';
  const textSecondary = isDark ? 'text-sage-400' : 'text-gray-500';

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    dispatch(clearCurrentScan());
    dispatch(startScan());
    dispatch(incrementTodayScans());

    try {
      const result = await plantApi.scanPlant(file);
      dispatch(scanSuccess({
        id: Math.random().toString(36).substr(2, 9),
        plantId: result.data.plantId,
        plantName: result.data.plantName,
        confidence: result.data.confidence,
        timestamp: new Date().toISOString(),
        imageUrl: url,
        careSummary: result.data.careSummary,
      }));
    } catch (err: any) {
      dispatch(scanFailure(err.message || 'Scan failed'));
    }
  }, [dispatch]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const scannedPlant = currentScan ? PLANTS.find(p => p.id === currentScan.plantId) : null;

  return (
    <div className={`min-h-screen ${bg} page-transition`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className={`font-display text-3xl sm:text-4xl font-bold ${textPrimary}`}>🔍 AI Plant Scanner</h1>
          <p className={textSecondary}>Upload a plant photo for instant AI identification</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload area */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onClick={() => fileRef.current?.click()}
              className={`relative border-2 border-dashed rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                dragOver
                  ? 'border-forest-400 bg-forest-500/10'
                  : isDark ? 'border-sage-600 hover:border-forest-500 bg-sage-900/40' : 'border-gray-300 hover:border-forest-400 bg-gray-50'
              }`}
              style={{ minHeight: 320 }}
            >
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
              />

              {preview ? (
                <div className="relative">
                  <img src={preview} alt="Preview" className="w-full h-80 object-cover" />
                  {isScanning && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="w-16 h-16 border-4 border-forest-500 border-t-transparent rounded-full"
                      />
                      <div className="text-white font-medium">Analyzing plant...</div>
                      {/* Scanning animation lines */}
                      <motion.div
                        animate={{ y: [0, 280, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute left-0 right-0 h-0.5 bg-forest-400/60"
                        style={{ boxShadow: '0 0 10px #22c55e' }}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-80 gap-4">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl"
                  >
                    📸
                  </motion.div>
                  <div className={`text-center ${textPrimary}`}>
                    <div className="font-semibold text-lg mb-1">Drop your plant photo here</div>
                    <div className={`text-sm ${textSecondary}`}>or click to browse</div>
                  </div>
                  <div className={`text-xs ${textSecondary} text-center max-w-xs`}>
                    Supports JPG, PNG, WebP • AI will identify your plant instantly
                  </div>
                </div>
              )}
            </motion.div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => fileRef.current?.click()}
                disabled={isScanning}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? '⏳ Scanning...' : preview ? '🔄 Scan New Image' : '📷 Upload Image'}
              </button>
              {(preview || error) && !isScanning && (
                <button
                  onClick={() => { setPreview(null); dispatch(clearCurrentScan()); }}
                  className={`px-4 py-3 rounded-xl border transition-colors ${isDark ? 'border-sage-600 text-sage-300 hover:border-red-500 hover:text-red-400' : 'border-gray-300 text-gray-600 hover:border-red-400 hover:text-red-500'}`}
                >
                  ✕ Clear
                </button>
              )}
            </div>

            {/* Error state */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-start gap-3"
                >
                  <span className="text-xl">⚠️</span>
                  <div>
                    <div className="font-medium mb-1">Scan failed</div>
                    <div>{error}</div>
                    <button
                      onClick={() => fileRef.current?.click()}
                      className="mt-2 text-red-300 hover:text-red-200 underline"
                    >
                      Try again →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {isScanning ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`${cardBg} border rounded-2xl p-6 space-y-4`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      className="w-8 h-8 border-2 border-forest-500 border-t-transparent rounded-full"
                    />
                    <span className={textPrimary}>AI is analyzing your plant...</span>
                  </div>
                  {[80, 60, 90, 70].map((w, i) => (
                    <div key={i} className={`skeleton h-4 rounded`} style={{ width: `${w}%` }} />
                  ))}
                </motion.div>
              ) : currentScan ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`${cardBg} border rounded-2xl overflow-hidden`}
                >
                  {/* Confidence banner */}
                  <div className={`p-4 ${
                    currentScan.confidence >= 85 ? 'bg-green-500/10 border-b border-green-500/20' :
                    currentScan.confidence >= 70 ? 'bg-yellow-500/10 border-b border-yellow-500/20' :
                    'bg-red-500/10 border-b border-red-500/20'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${textPrimary}`}>Identification Result</span>
                      <div className={`text-lg font-bold ${
                        currentScan.confidence >= 85 ? 'text-green-400' :
                        currentScan.confidence >= 70 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {currentScan.confidence}% match
                      </div>
                    </div>
                    {/* Confidence bar */}
                    <div className={`mt-2 h-2 rounded-full ${isDark ? 'bg-sage-800' : 'bg-gray-200'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentScan.confidence}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          currentScan.confidence >= 85 ? 'bg-green-500' :
                          currentScan.confidence >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-xl ${isDark ? 'bg-forest-900/50' : 'bg-forest-100'} flex items-center justify-center text-4xl flex-shrink-0`}>
                        🌿
                      </div>
                      <div>
                        <h2 className={`font-display text-2xl font-bold ${textPrimary}`}>{currentScan.plantName}</h2>
                        {scannedPlant && (
                          <p className={`text-sm italic ${textSecondary}`}>{scannedPlant.scientificName}</p>
                        )}
                      </div>
                    </div>

                    {scannedPlant && (
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: 'Type', value: scannedPlant.type, icon: '🌿' },
                          { label: 'Difficulty', value: scannedPlant.difficulty, icon: '⭐' },
                          { label: 'Sunlight', value: scannedPlant.sunlight.replace('-', ' '), icon: '☀️' },
                          { label: 'Watering', value: scannedPlant.wateringFrequency, icon: '💧' },
                        ].map((item, i) => (
                          <div key={i} className={`p-3 rounded-xl ${isDark ? 'bg-sage-800/50' : 'bg-gray-50'}`}>
                            <div className={`text-xs ${textSecondary} mb-0.5`}>{item.icon} {item.label}</div>
                            <div className={`text-sm font-medium capitalize ${textPrimary}`}>{item.value}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className={`p-4 rounded-xl ${isDark ? 'bg-sage-800/40' : 'bg-gray-50'}`}>
                      <div className={`text-xs font-medium ${textSecondary} mb-2`}>AI CARE SUMMARY</div>
                      <p className={`text-sm leading-relaxed ${textPrimary}`}>{currentScan.careSummary}</p>
                    </div>

                    {scannedPlant && (
                      <div>
                        <div className={`text-xs font-medium ${textSecondary} mb-2`}>WATCH OUT FOR</div>
                        <div className="space-y-2">
                          {scannedPlant.diseases.slice(0, 2).map((d, i) => (
                            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${isDark ? 'bg-sage-800/40' : 'bg-gray-50'}`}>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                d.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                                d.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-green-500/20 text-green-400'
                              }`}>{d.severity}</span>
                              <span className={`text-sm ${textPrimary}`}>{d.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${cardBg} border rounded-2xl p-8 text-center`}
                >
                  <div className="text-5xl mb-4">🤖</div>
                  <h3 className={`font-semibold text-lg mb-2 ${textPrimary}`}>Ready to Scan</h3>
                  <p className={`text-sm ${textSecondary}`}>Upload a plant image to get AI identification, confidence score, and care guide</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Scan History */}
        {scanHistory.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`font-display text-2xl font-bold ${textPrimary}`}>Scan History</h2>
              <button
                onClick={() => dispatch(clearHistory())}
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                Clear all
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {scanHistory.map((scan, i) => (
                <motion.div
                  key={scan.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`${cardBg} border rounded-xl overflow-hidden`}
                >
                  <div className="h-28 bg-gradient-to-br from-forest-900/40 to-sage-900 flex items-center justify-center text-5xl">
                    🌿
                  </div>
                  <div className="p-3">
                    <div className={`font-medium text-sm ${textPrimary} truncate`}>{scan.plantName}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className={`text-xs ${textSecondary}`}>{new Date(scan.timestamp).toLocaleDateString()}</span>
                      <span className={`text-xs font-medium ${scan.confidence >= 85 ? 'text-green-400' : scan.confidence >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {scan.confidence}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
