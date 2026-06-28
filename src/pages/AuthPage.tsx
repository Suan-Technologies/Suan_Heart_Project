import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Phone, Mail, ArrowLeft, ChevronRight, Shield, BadgeCheck } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function AuthPage() {
  const navigate = useNavigate();
  const { setAuthenticated, setCurrentUser } = useStore();
  const [step, setStep] = useState<'phone' | 'otp' | 'email'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = () => {
    if (phone.length >= 10) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep('otp');
      }, 1500);
    }
  };

  const handleOtpSubmit = () => {
    if (otp.every(d => d !== '')) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep('email');
      }, 1000);
    }
  };

  const handleEmailSubmit = () => {
    if (email.includes('@')) {
      setLoading(true);
      setTimeout(() => {
        setAuthenticated(true);
        setCurrentUser({
          id: 'me',
          name: '',
          age: 0,
          gender: 'other',
          photos: [],
          bio: '',
          location: '',
          distance: '',
          profession: '',
          education: '',
          height: '',
          languages: [],
          interests: [],
          relationshipGoal: 'dating',
          verificationLevel: 'phone',
          trustScore: 30,
          isOnline: true,
          lastActive: 'now',
        });
        navigate('/onboarding');
      }, 1000);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-blue-500/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Back Button */}
      <button
        onClick={() => step === 'phone' ? navigate('/') : setStep(step === 'otp' ? 'phone' : 'otp')}
        className="absolute top-6 left-6 glass rounded-full p-3 hover:bg-white/10 transition-all z-10"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-10 h-10 rounded-full gradient-btn flex items-center justify-center">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-2xl font-bold">TrueBond</span>
        </div>

        <AnimatePresence mode="wait">
          {step === 'phone' && (
            <motion.div
              key="phone"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1 className="text-3xl font-bold mb-2 text-center">Enter Your Phone</h1>
              <p className="text-white/50 text-center mb-8">We will send you a verification code</p>

              <div className="glass rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-white/70">+91</span>
                  </div>
                  <div className="flex-1">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="99999 99999"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/30 transition-all"
                    />
                  </div>
                </div>
                <button
                  onClick={handlePhoneSubmit}
                  disabled={phone.length < 10 || loading}
                  className="w-full gradient-btn py-4 rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Continue
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-white/40 mb-4">Or continue with</p>
                <div className="flex justify-center gap-4">
                  <button className="glass rounded-xl p-4 hover:bg-white/10 transition-all">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </button>
                  <button className="glass rounded-xl p-4 hover:bg-white/10 transition-all">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.1 0 2.01-.93 3.33-.93.49 0 2.24.22 3.32 1.8-.08.05-1.98 1.19-1.96 3.54.02 2.82 2.41 3.75 2.46 3.77-.02.1-.38 1.32-1.4 2.62M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'otp' && (
            <motion.div
              key="otp"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-center">Verify OTP</h1>
              <p className="text-white/50 text-center mb-8">
                Code sent to +91 {phone.slice(0, 5)} {phone.slice(5)}
              </p>

              <div className="glass rounded-2xl p-6 mb-6">
                <div className="flex justify-center gap-3 mb-6">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-12 h-14 bg-white/5 border border-white/10 rounded-xl text-center text-2xl font-bold text-white focus:outline-none focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/30 transition-all"
                      maxLength={1}
                    />
                  ))}
                </div>
                <button
                  onClick={handleOtpSubmit}
                  disabled={!otp.every(d => d !== '') || loading}
                  className="w-full gradient-btn py-4 rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Verify & Continue</>
                  )}
                </button>
              </div>

              <p className="text-center text-sm text-white/40">
                Didn't receive code?{' '}
                <button className="text-rose-400 hover:text-rose-300 transition-colors">Resend</button>
              </p>
            </motion.div>
          )}

          {step === 'email' && (
            <motion.div
              key="email"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-center">Add Your Email</h1>
              <p className="text-white/50 text-center mb-8">
                For account recovery and important notifications
              </p>

              <div className="glass rounded-2xl p-6 mb-6">
                <div className="mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/30 transition-all"
                  />
                </div>
                <button
                  onClick={handleEmailSubmit}
                  disabled={!email.includes('@') || loading}
                  className="w-full gradient-btn py-4 rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <BadgeCheck className="w-5 h-5" />
                      Complete Setup
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={handleEmailSubmit}
                className="w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors"
              >
                Skip for now
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Badges */}
        <div className="mt-12 flex items-center justify-center gap-6 text-white/30">
          <div className="flex items-center gap-1.5 text-xs">
            <Shield className="w-3.5 h-3.5" />
            Secure
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <BadgeCheck className="w-3.5 h-3.5" />
            Verified
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Phone className="w-3.5 h-3.5" />
            Encrypted
          </div>
        </div>
      </motion.div>
    </div>
  );
}
