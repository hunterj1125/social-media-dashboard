'use client';

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const engagementData = [
  { month: 'Jan', likes: 4200, comments: 840, shares: 420 },
  { month: 'Feb', likes: 5100, comments: 1020, shares: 510 },
  { month: 'Mar', likes: 4800, comments: 960, shares: 480 },
  { month: 'Apr', likes: 6200, comments: 1240, shares: 620 },
  { month: 'May', likes: 7500, comments: 1500, shares: 750 },
  { month: 'Jun', likes: 8900, comments: 1780, shares: 890 },
];

const growthData = [
  { month: 'Jan', followers: 12400 },
  { month: 'Feb', followers: 15200 },
  { month: 'Mar', followers: 18100 },
  { month: 'Apr', followers: 22300 },
  { month: 'May', followers: 27800 },
  { month: 'Jun', followers: 34500 },
];

const platformData = [
  { name: 'Instagram', value: 34500, color: '#e1306c' },
  { name: 'Twitter', value: 28300, color: '#1da1f2' },
  { name: 'Facebook', value: 42100, color: '#4267b2' },
  { name: 'LinkedIn', value: 15700, color: '#0077b5' },
];

export function EngagementChart() {
  return (
    <motion.div
      className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-white/50"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)' }}
    >
      <div className="flex items-center justify-between mb-8">
        <motion.h3
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
        >
          📊 Engagement Metrics
        </motion.h3>
        <div className="flex gap-5 text-base font-bold">
          {[
            { color: 'bg-blue-500', label: 'Likes', delay: 0.4 },
            { color: 'bg-purple-500', label: 'Comments', delay: 0.5 },
            { color: 'bg-pink-500', label: 'Shares', delay: 0.6 },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
            >
              <motion.div
                className={`w-4 h-4 rounded-full ${item.color} shadow-lg`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
              />
              <span className="text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
            <XAxis dataKey="month" stroke="#4b5563" style={{ fontSize: '14px', fontWeight: 700 }} />
            <YAxis stroke="#4b5563" style={{ fontSize: '14px', fontWeight: 700 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                border: 'none',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                padding: '16px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
              cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
            />
            <Bar dataKey="likes" fill="#3b82f6" radius={[10, 10, 0, 0]} animationDuration={1000} />
            <Bar dataKey="comments" fill="#8b5cf6" radius={[10, 10, 0, 0]} animationDuration={1200} />
            <Bar dataKey="shares" fill="#ec4899" radius={[10, 10, 0, 0]} animationDuration={1400} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}

export function GrowthChart() {
  return (
    <motion.div
      className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-white/50"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)' }}
    >
      <div className="flex items-center justify-between mb-8">
        <motion.h3
          className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
        >
          📈 Follower Growth
        </motion.h3>
        <motion.div
          className="flex items-center gap-3 px-5 py-2 bg-green-50 rounded-full border-2 border-green-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', bounce: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.span
            className="text-green-600 text-lg font-extrabold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↗ 178%
          </motion.span>
          <span className="text-gray-600 text-sm font-bold">growth</span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={growthData}>
            <defs>
              <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
            <XAxis dataKey="month" stroke="#4b5563" style={{ fontSize: '14px', fontWeight: 700 }} />
            <YAxis stroke="#4b5563" style={{ fontSize: '14px', fontWeight: 700 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                border: 'none',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                padding: '16px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
              cursor={{ stroke: '#3b82f6', strokeWidth: 3 }}
            />
            <Area 
              type="monotone" 
              dataKey="followers" 
              stroke="#3b82f6" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorFollowers)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}

export function PlatformChart() {
  return (
    <motion.div
      className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-white/50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.01, boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)' }}
    >
      <div className="flex items-center justify-between mb-8">
        <motion.h3
          className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          🎯 Platform Distribution
        </motion.h3>
        <motion.span
          className="text-lg font-extrabold text-gray-700 bg-gray-100 px-5 py-2 rounded-full border-2 border-gray-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', bounce: 0.5 }}
        >
          Total: {platformData.reduce((sum, p) => sum + p.value, 0).toLocaleString()}
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={platformData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
            <XAxis type="number" stroke="#4b5563" style={{ fontSize: '14px', fontWeight: 700 }} />
            <YAxis dataKey="name" type="category" stroke="#4b5563" style={{ fontSize: '14px', fontWeight: 700 }} width={100} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                border: 'none',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                padding: '16px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
              cursor={{ fill: 'rgba(16, 185, 129, 0.05)' }}
            />
            <Bar dataKey="value" radius={[0, 10, 10, 0]} animationDuration={1500}>
              {platformData.map((entry, index) => (
                <Bar key={`bar-${index}`} dataKey="value" fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
