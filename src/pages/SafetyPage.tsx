import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Shield, Siren,
  AlertTriangle, BookOpen, HeartHandshake
} from 'lucide-react';
import { safetyFeatures } from '@/data/mockData';

const iconMap: Record<string, React.ElementType> = {
  Siren, Brain: Shield, Camera: Shield, ShieldAlert: AlertTriangle, EyeOff: Shield, Lock: Shield,
};

export default function SafetyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-blue-500/10" />
        <div className="relative px-4 pt-4 pb-8">
          <button
            onClick={() => navigate(-1)}
            className="glass rounded-full p-3 hover:bg-white/10 transition-all mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Safety Center</h1>
            <p className="text-white/50 max-w-xs mx-auto">
              Your safety is our top priority. Here are the tools to keep you protected.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-4 pb-32">
        {/* Emergency SOS */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-red-500/20 border border-red-500/30 rounded-2xl p-5 flex items-center gap-4 hover:bg-red-500/30 transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-red-500/30 flex items-center justify-center">
            <Siren className="w-6 h-6 text-red-400" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-red-400">Emergency SOS</h3>
            <p className="text-sm text-white/60">Press and hold for 3 seconds</p>
          </div>
        </motion.button>

        {/* Safety Features */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-white/40 mb-3 px-1">Safety Features</h3>
          <div className="space-y-3">
            {safetyFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon] || Shield;
              return (
                <div key={i} className="glass rounded-2xl p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Safety Tips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="font-semibold">Safety Tips</h3>
          </div>
          <ul className="space-y-3">
            {[
              'Always meet in public places for the first few dates',
              'Tell a friend or family member where you are going',
              'Never share financial information or send money',
              'Trust your instincts - if something feels off, leave',
              'Use video call before meeting in person',
              'Keep personal information private until you trust them',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[10px] text-amber-400 font-bold">{i + 1}</span>
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Trust & Safety Team */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-5 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
            <HeartHandshake className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h4 className="font-medium">24/7 Support Team</h4>
            <p className="text-xs text-white/50">Our safety team is always here to help</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
