// src/Pages/Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpenCheck, Mail, Lock, LogIn, Eye, EyeOff, Compass
} from 'lucide-react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // placeholder
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden">

        {/* Left Panel */}
        <motion.div
          className="hidden md:flex flex-col justify-between bg-blue-600 text-white p-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-mono font-bold text-xl">
            <BookOpenCheck className="w-6 h-6" />
            <span>CareerGuide</span>
          </div>

          {/* Illustration Text */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Compass className="w-4 h-4" />
              Navigate Your Future
            </motion.div>
            <h2 className="text-3xl font-bold leading-snug mb-3">
              Welcome back,<br />future achiever!
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Log in to access your personalized career roadmap, aptitude results, and expert guidance curated just for you.
            </p>
          </div>

          {/* Quotes */}
          <div className="bg-blue-500 rounded-xl p-4 text-sm text-blue-100">
            <p className="italic">"The secret of getting ahead is getting started."</p>
            <p className="mt-2 font-semibold text-white">— Mark Twain</p>
          </div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          className="bg-white p-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-2 text-blue-600 font-mono font-bold text-xl mb-6 md:hidden">
            <BookOpenCheck className="w-6 h-6" />
            <span>CareerGuide</span>
          </div>

          <h1 className="text-2xl font-bold text-black font-mono mb-1">Sign in to your account</h1>
          <p className="text-gray-500 text-sm mb-8 font-sans">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">
              Sign up free
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link to="/forgot-password" className="text-xs text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember-me"
                type="checkbox"
                className="accent-blue-600 w-4 h-4"
              />
              <label htmlFor="remember-me" className="text-sm text-gray-600">Remember me</label>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition disabled:opacity-70"
            >
              {loading ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  Log In
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400">or continue with</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Google SSO placeholder */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 h-4"
            />
            Continue with Google
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
