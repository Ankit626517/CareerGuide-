// src/Pages/Register.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpenCheck, Mail, Lock, User, UserPlus, Eye, EyeOff,
  GraduationCap, Phone, CheckCircle2
} from 'lucide-react';

const gradeOptions = [
  'Class 9', 'Class 10', 'Class 11', 'Class 12',
  'Undergraduate', 'Postgraduate', 'Other'
];

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    grade: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // placeholder
  };

  const passwordStrength = () => {
    const p = form.password;
    if (!p) return null;
    if (p.length < 6) return { label: 'Weak', color: 'bg-red-400', width: '33%' };
    if (p.length < 10) return { label: 'Medium', color: 'bg-yellow-400', width: '66%' };
    return { label: 'Strong', color: 'bg-green-500', width: '100%' };
  };

  const strength = passwordStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden">

        {/* Left Panel */}
        <motion.div
          className="hidden md:flex flex-col justify-between bg-gradient-to-b from-blue-600 to-blue-700 text-white p-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono font-bold text-xl">
            <BookOpenCheck className="w-6 h-6" />
            <span>CareerGuide</span>
          </div>

          {/* Info */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <GraduationCap className="w-4 h-4" />
              Made for Students
            </motion.div>
            <h2 className="text-3xl font-bold leading-snug mb-3">
              Start your journey<br />to the right career!
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Join thousands of students discovering their ideal career paths through personalized aptitude tests and expert guidance.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            {[
              'Personalized career recommendations',
              'Free aptitude assessment tests',
              'Explore 1000+ career paths',
              'Expert guidance & resources',
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-sm text-blue-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <CheckCircle2 className="w-4 h-4 text-green-300 flex-shrink-0" />
                {benefit}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          className="bg-white p-8 flex flex-col justify-center overflow-y-auto max-h-screen"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-2 text-blue-600 font-mono font-bold text-xl mb-4 md:hidden">
            <BookOpenCheck className="w-6 h-6" />
            <span>CareerGuide</span>
          </div>

          <h1 className="text-2xl font-bold text-black font-mono mb-1">Create your account</h1>
          <p className="text-gray-500 text-sm mb-6 font-sans">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="register-fullname"
                  type="text"
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="register-email"
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

            {/* Phone + Grade (side by side) */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="register-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Grade / Level</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    id="register-grade"
                    name="grade"
                    required
                    value={form.grade}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none bg-white"
                  >
                    <option value="" disabled>Select</option>
                    {gradeOptions.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="register-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
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
              {/* Password strength bar */}
              {strength && (
                <div className="mt-2">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${strength.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: strength.width }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{strength.label} password</p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="register-confirm-password"
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className={`w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 transition ${
                    form.confirmPassword && form.confirmPassword !== form.password
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {form.confirmPassword && form.confirmPassword !== form.password && (
                <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                id="agree-terms"
                type="checkbox"
                required
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="accent-blue-600 mt-0.5 w-4 h-4"
              />
              <label htmlFor="agree-terms" className="text-sm text-gray-600 leading-relaxed">
                I agree to the{' '}
                <span className="text-blue-600 hover:underline cursor-pointer">Terms of Service</span>{' '}
                and{' '}
                <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>
              </label>
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
                  <UserPlus className="w-4 h-4" />
                  Create Account
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400">or sign up with</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Google SSO */}
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

export default Register;
