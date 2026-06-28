import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Crown, Zap, Infinity,
  Star, Check
} from 'lucide-react';
import { premiumPlans } from '@/data/mockData';
import { useStore } from '@/store/useStore';

export default function PremiumPage() {
  const navigate = useNavigate();
  const { premiumPlan, setPremiumPlan } = useStore();

  const planIcons = [Crown, Star, Zap, Infinity];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-blue-500/20" />
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
            <div className="w-16 h-16 rounded-full gradient-btn flex items-center justify-center mx-auto mb-4">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Go Premium</h1>
            <p className="text-white/50 max-w-xs mx-auto">
              Unlock the full TrustBond experience and find your match faster
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-4 pb-32">
        {premiumPlans.map((plan, i) => {
          const isActive = premiumPlan === plan.id;
          const Icon = planIcons[i] || Crown;
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                isActive ? 'ring-2 ring-rose-400' : ''
              }`}
            >
              <div className={`p-5 ${
                plan.id === 'platinum'
                  ? 'bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-blue-500/20'
                  : 'glass'
              }`}>
                {plan.id === 'gold' && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-black text-[10px] font-bold px-3 py-0.5 rounded-b-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-${plan.color.split(' ')[1]} to-${plan.color.split(' ')[3]} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold">₹{plan.price}</span>
                        <span className="text-sm text-white/40">/{plan.period}</span>
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <div className="glass px-3 py-1 rounded-full text-xs text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Active
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-5">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-white/30">
                      <span className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setPremiumPlan(plan.id)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    isActive
                      ? 'glass text-white/60 cursor-default'
                      : plan.id === 'gold'
                        ? 'gradient-btn text-white'
                        : 'glass hover:bg-white/10 text-white'
                  }`}
                  disabled={isActive}
                >
                  {isActive ? 'Current Plan' : 'Choose ' + plan.name}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
