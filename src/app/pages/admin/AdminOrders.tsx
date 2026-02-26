import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { mockOrders } from '../../data/mockData';

export const AdminOrders: React.FC = () => {
  const [orders] = useState(mockOrders);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl text-[#F5F1EA] mb-2">
          Orders
        </h1>
        <p className="text-[#F5F1EA]/60">Manage customer purchases</p>
      </div>

      <div className="bg-[#1A1A1C] border border-[#F5F1EA]/10 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0B0B0C]">
            <tr>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Order ID</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Customer</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Date</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Total</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Status</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Payment</th>
              <th className="text-right p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-[#F5F1EA]/5 hover:bg-[#F5F1EA]/5">
                <td className="p-4 text-[#F5F1EA]">{order.id}</td>
                <td className="p-4">
                  <p className="text-[#F5F1EA]">{order.customerName}</p>
                  <p className="text-sm text-[#F5F1EA]/60">{order.customerEmail}</p>
                </td>
                <td className="p-4 text-[#F5F1EA]/70">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>
                <td className="p-4 text-[#C6A75E]">${order.total.toLocaleString()}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded ${
                    order.status === 'delivered' ? 'bg-green-500/20 text-green-500' :
                    order.status === 'processing' ? 'bg-blue-500/20 text-blue-500' :
                    'bg-[#F5F1EA]/20 text-[#F5F1EA]'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded ${
                    order.paymentStatus === 'paid' ? 'bg-green-500/20 text-green-500' :
                    'bg-[#F5F1EA]/20 text-[#F5F1EA]'
                  }`}>
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-[#C6A75E] hover:text-[#A88B4A]">
                    <Eye className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
