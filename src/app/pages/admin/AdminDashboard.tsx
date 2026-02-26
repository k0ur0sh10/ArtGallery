import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Package, Calendar, Users, TrendingUp } from 'lucide-react';
import { mockPaintings, mockOrders, mockEvents, mockSubscribers } from '../../data/mockData';

export const AdminDashboard: React.FC = () => {
  const totalRevenue = mockOrders
    .filter(o => o.paymentStatus === 'paid')
    .reduce((sum, order) => sum + order.total, 0);

  const availablePaintings = mockPaintings.filter(p => p.availability === 'available').length;
  const upcomingEvents = mockEvents.filter(e => new Date(e.date) > new Date()).length;
  const totalSubscribers = mockSubscribers.length;

  const stats = [
    {
      label: 'Total Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-500',
    },
    {
      label: 'Available Artworks',
      value: availablePaintings,
      icon: Package,
      color: 'text-[#C6A75E]',
    },
    {
      label: 'Upcoming Events',
      value: upcomingEvents,
      icon: Calendar,
      color: 'text-blue-500',
    },
    {
      label: 'Newsletter Subscribers',
      value: totalSubscribers,
      icon: Users,
      color: 'text-purple-500',
    },
  ];

  const recentOrders = mockOrders.slice(0, 5);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-3xl md:text-4xl text-[#F5F1EA] mb-2">
          Dashboard
        </h1>
        <p className="text-sm md:text-base text-[#F5F1EA]/60">Welcome back, Elena</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1A1A1C] p-4 md:p-6 border border-[#F5F1EA]/10"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color}`} />
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
              </div>
              <p className="text-xs md:text-sm text-[#F5F1EA]/60 mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl text-[#F5F1EA]" style={{ fontFamily: 'var(--font-serif)' }}>
                {stat.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1A1A1C] p-6 border border-[#F5F1EA]/10"
        >
          <h2 className="text-xl text-[#F5F1EA] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Recent Orders
          </h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between py-3 border-b border-[#F5F1EA]/5">
                <div>
                  <p className="text-[#F5F1EA]">{order.customerName}</p>
                  <p className="text-sm text-[#F5F1EA]/60">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#C6A75E]">${order.total.toLocaleString()}</p>
                  <p className={`text-xs ${order.status === 'delivered' ? 'text-green-500' :
                    order.status === 'processing' ? 'text-blue-500' :
                      'text-[#F5F1EA]/60'
                    }`}>
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Collection Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1A1A1C] p-6 border border-[#F5F1EA]/10"
        >
          <h2 className="text-xl text-[#F5F1EA] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Collection Status
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#F5F1EA]/5">
              <span className="text-[#F5F1EA]/70">Available</span>
              <span className="text-[#F5F1EA]">
                {mockPaintings.filter(p => p.availability === 'available').length}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#F5F1EA]/5">
              <span className="text-[#F5F1EA]/70">Reserved</span>
              <span className="text-[#C6A75E]">
                {mockPaintings.filter(p => p.availability === 'reserved').length}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#F5F1EA]/5">
              <span className="text-[#F5F1EA]/70">Sold</span>
              <span className="text-green-500">
                {mockPaintings.filter(p => p.availability === 'sold').length}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#F5F1EA]/70">Total Value</span>
              <span className="text-[#F5F1EA]" style={{ fontFamily: 'var(--font-serif)' }}>
                ${mockPaintings.reduce((sum, p) => sum + p.price, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};