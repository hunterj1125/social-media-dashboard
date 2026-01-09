'use client';

import StatCard from './components/StatCard';
import { EngagementChart, GrowthChart, PlatformChart } from './components/Charts';

export default function Dashboard() {
  const socialStats = [
    { platform: 'Instagram', followers: 34500, change: 12.5, icon: '📱', color: 'from-pink-500 to-rose-500' },
    { platform: 'Twitter', followers: 28300, change: 8.3, icon: '🐦', color: 'from-blue-500 to-cyan-500' },
    { platform: 'Facebook', followers: 42100, change: -2.1, icon: '👥', color: 'from-blue-600 to-indigo-600' },
    { platform: 'LinkedIn', followers: 15700, change: 15.7, icon: '💼', color: 'from-blue-700 to-blue-900' },
  ];

  const totalFollowers = socialStats.reduce((sum, stat) => sum + stat.followers, 0);
  const avgGrowth = (socialStats.reduce((sum, stat) => sum + stat.change, 0) / socialStats.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 py-12 max-w-7xl relative z-10">
        {/* Header Section with Stats Summary */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div>
              <h1 className="text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
                Social Media Dashboard
              </h1>
              <p className="text-2xl text-white/90 flex items-center gap-3 font-medium">
                <span></span>
                Track your social media performance across all platforms
              </p>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl px-8 py-6 shadow-2xl border-2 border-white/50">
                <p className="text-base font-bold text-gray-600 mb-2 uppercase tracking-wide">Total Reach</p>
                <p className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {typeof window !== 'undefined' ? totalFollowers.toLocaleString() : '120,600'}
                </p>
              </div>
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl px-8 py-6 shadow-2xl border-2 border-white/50">
                <p className="text-base font-bold text-gray-600 mb-2 uppercase tracking-wide">Avg Growth</p>
                <p className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {typeof window !== 'undefined' ? `+${avgGrowth}%` : '+8.6%'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialStats.map((stat) => (
            <StatCard key={stat.platform} {...stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <EngagementChart />
          <GrowthChart />
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <PlatformChart />
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border-2 border-white/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              <span className="text-4xl"></span>
              Recent Activity
            </h3>
            <button className="text-lg font-bold text-blue-600 hover:text-blue-700 hover:scale-105 transition-all px-4 py-2 rounded-xl hover:bg-blue-50">
              View All 
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { action: 'New follower milestone reached', platform: 'Instagram', time: '2 hours ago', icon: '', color: 'from-pink-500 to-rose-500' },
              { action: 'Post received 500+ likes', platform: 'Twitter', time: '5 hours ago', icon: '', color: 'from-blue-500 to-cyan-500' },
              { action: 'Engagement rate increased by 15%', platform: 'Facebook', time: '1 day ago', icon: '', color: 'from-blue-600 to-indigo-600' },
              { action: 'New connection from industry leader', platform: 'LinkedIn', time: '2 days ago', icon: '', color: 'from-blue-700 to-blue-900' },
            ].map((activity, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-200 cursor-pointer border-2 border-gray-100 hover:border-blue-300"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {activity.action}
                  </p>
                  <p className="text-base text-gray-600 flex items-center gap-3 font-medium">
                    <span className="font-bold">{activity.platform}</span>
                    <span className="text-gray-400"></span>
                    <span>{activity.time}</span>
                  </p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-lg text-white/80 font-semibold">
            Last updated: Just now
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}


