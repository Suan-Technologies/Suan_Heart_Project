import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Users, Heart, MessageCircle, ShieldAlert,
  DollarSign, Activity, Crown, UserCheck,
  Flag, BarChart3, Settings as SettingsIcon
} from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Users', value: '124,592', change: '+12%', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Matches', value: '45,231', change: '+8%', icon: Heart, color: 'from-rose-500 to-rose-600' },
    { label: 'Messages Today', value: '892K', change: '+24%', icon: MessageCircle, color: 'from-purple-500 to-purple-600' },
    { label: 'Reports', value: '23', change: '-5%', icon: ShieldAlert, color: 'from-amber-500 to-amber-600' },
    { label: 'Revenue', value: '₹24.5L', change: '+18%', icon: DollarSign, color: 'from-emerald-500 to-emerald-600' },
    { label: 'Premium Users', value: '18,420', change: '+15%', icon: Crown, color: 'from-yellow-500 to-yellow-600' },
  ];

  const recentUsers = [
    { name: 'Priya S.', joined: '2 min ago', status: 'active', verified: true },
    { name: 'Rohan K.', joined: '5 min ago', status: 'active', verified: true },
    { name: 'Ananya M.', joined: '12 min ago', status: 'offline', verified: false },
    { name: 'Vikram P.', joined: '18 min ago', status: 'active', verified: true },
    { name: 'Meera R.', joined: '25 min ago', status: 'offline', verified: true },
  ];

  const recentReports = [
    { user: 'Anonymous', reason: 'Inappropriate content', status: 'pending', time: '10 min ago' },
    { user: 'User #4821', reason: 'Fake profile', status: 'reviewing', time: '30 min ago' },
    { user: 'User #9153', reason: 'Harassment', status: 'resolved', time: '1h ago' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <div className="border-b border-white/5 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/10 rounded-full transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
            <p className="text-xs text-white/40">TrustBond Admin Panel</p>
          </div>
        </div>
        <button className="glass rounded-full p-2.5 hover:bg-white/10 transition-all">
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-6 pb-32">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-white/40" />
              User Growth
            </h3>
            <select className="glass rounded-lg px-3 py-1 text-xs text-white/60">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-48 flex items-end justify-around gap-2">
            {[35, 55, 40, 70, 45, 80, 65, 90, 75, 60, 85, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex-1 rounded-t-md gradient-btn opacity-60 hover:opacity-100 transition-opacity"
                style={{ maxWidth: 40 }}
              />
            ))}
          </div>
          <div className="flex justify-around mt-2 text-[10px] text-white/30">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
            <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </motion.div>

        {/* Recent Users */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-5"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-white/40" />
            Recent Users
          </h3>
          <div className="space-y-3">
            {recentUsers.map((user, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center text-sm font-bold">
                  {user.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{user.name}</span>
                    {user.verified && (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Verified</span>
                    )}
                  </div>
                  <span className="text-xs text-white/40">{user.joined}</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-emerald-400' : 'bg-white/20'}`} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reports */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-5"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Flag className="w-5 h-5 text-white/40" />
            Moderation Queue
          </h3>
          <div className="space-y-3">
            {recentReports.map((report, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Flag className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{report.reason}</div>
                  <div className="text-xs text-white/40">{report.user} · {report.time}</div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  report.status === 'resolved'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : report.status === 'reviewing'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {report.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activity Log */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-5"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-white/40" />
            System Health
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.03] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">99.9%</div>
              <div className="text-xs text-white/40">Uptime</div>
            </div>
            <div className="bg-white/[0.03] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">45ms</div>
              <div className="text-xs text-white/40">Avg Response</div>
            </div>
            <div className="bg-white/[0.03] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">12K</div>
              <div className="text-xs text-white/40">Req/sec</div>
            </div>
            <div className="bg-white/[0.03] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">0</div>
              <div className="text-xs text-white/40">Incidents</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
