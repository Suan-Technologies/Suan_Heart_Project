import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Lock, Eye, Mail, Cookie, UserCheck, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Shield,
      title: 'Data Security',
      text: 'We use AES-256-GCM encryption, HTTPS/TLS, and secure JWT tokens to protect your data. Passwords are hashed with bcrypt. OTPs are hashed with SHA-256 before storage.',
    },
    {
      icon: FileText,
      title: 'Information We Collect',
      text: 'We collect your name, email, phone number, profile photos, age, gender, location, profession, and preferences solely for matchmaking purposes.',
    },
    {
      icon: Lock,
      title: 'How We Protect You',
      text: 'All data is stored in a secure PostgreSQL database with SSL enforcement in production. Access is restricted via role-based authentication and rate limiting.',
    },
    {
      icon: Eye,
      title: 'Your Visibility',
      text: 'Your profile is only visible to authenticated users. You can disable discovery anytime. Photos are stored securely and served via CDN with signed URLs.',
    },
    {
      icon: Mail,
      title: 'Communication',
      text: 'We only send emails for OTP verification, password resets, and critical notifications. We never share your email with third parties.',
    },
    {
      icon: Cookie,
      title: 'Cookies & Tracking',
      text: 'We use minimal cookies for session management and security. No third-party trackers or ad networks are used.',
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      text: 'You can delete your account and all associated data at any time from Settings. Data deletion is irreversible and completed within 24 hours.',
    },
    {
      icon: Globe,
      title: 'Contact Us',
      text: 'For privacy-related queries, contact our Data Protection Officer at privacy@truebond.app.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-white/50 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <h2 className="text-lg font-semibold">{s.title}</h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-white/30 text-xs mt-8 text-center">
            TrueBond Matrimony Services. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
