import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { loginStart, loginSuccess, loginFailure } from '../features/auth/authSlice';
import { authService } from '../services/authService';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isDark } = useAppSelector(s => s.theme);
  const { isLoading, error } = useAppSelector(s => s.auth);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    dispatch(loginStart());
    try {
      const user = await authService.login(data);
      dispatch(loginSuccess(user));
      navigate('/dashboard');
    } catch (err: any) {
      dispatch(loginFailure(err.message));
    }
  };

  const bg = isDark ? 'bg-sage-950' : 'bg-gradient-to-br from-forest-50 to-sage-100';
  const cardBg = isDark ? 'bg-sage-900/80 border-sage-700/50' : 'bg-white/90 border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-sage-900';
  const textSecondary = isDark ? 'text-sage-400' : 'text-gray-500';
  const inputStyle = isDark ? 'input-field w-full' : 'input-field-light w-full';

  return (
    <div className={`min-h-screen ${bg} flex items-center justify-center px-4 relative overflow-hidden`}>
      {/* Animated background elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i }}
          className="absolute text-9xl opacity-[0.03] select-none pointer-events-none"
          style={{ left: `${5 + i * 20}%`, top: `${10 + (i % 3) * 25}%` }}
        >
          🌿
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-md ${cardBg} border backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative z-10`}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-5xl mb-3"
          >
            🌱
          </motion.div>
          <h1 className={`font-display text-2xl font-bold ${textPrimary}`}>Welcome back</h1>
          <p className={`text-sm mt-1 ${textSecondary}`}>Sign in to your PlantAI account</p>
        </div>

        {/* Demo credentials hint */}
        <div className={`mb-6 p-3 rounded-xl text-xs ${isDark ? 'bg-forest-900/30 border border-forest-700/30 text-forest-400' : 'bg-forest-50 border border-forest-200 text-forest-700'}`}>
          <strong>Demo:</strong> demo@plantai.com / demo1234
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-1.5 ${textPrimary}`}>Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
              })}
              type="email"
              placeholder="you@example.com"
              className={inputStyle}
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1.5 ${textPrimary}`}>Password</label>
            <input
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })}
              type="password"
              placeholder="••••••••"
              className={inputStyle}
            />
            {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
            >
              ⚠️ {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary w-full flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Signing in...
              </>
            ) : (
              '🔑 Sign In'
            )}
          </motion.button>
        </form>

        <p className={`text-center text-sm mt-6 ${textSecondary}`}>
          Don't have an account?{' '}
          <Link to="/signup" className="text-forest-400 hover:text-forest-300 font-medium">
            Create one free →
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
