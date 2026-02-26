import React, { useState } from 'react';
import { Download, Trash2 } from 'lucide-react';
import { mockSubscribers } from '../../data/mockData';
import { Button } from '../../components/Button';

export const AdminSubscribers: React.FC = () => {
  const [subscribers, setSubscribers] = useState(mockSubscribers);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this subscriber?')) {
      setSubscribers(subscribers.filter(s => s.id !== id));
    }
  };

  const handleExport = () => {
    const csv = [
      ['Name', 'Email', 'Subscribed Date'],
      ...subscribers.map(s => [s.name, s.email, s.subscribedAt])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-subscribers.csv';
    a.click();
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl text-[#F5F1EA] mb-2">
            Newsletter Subscribers
          </h1>
          <p className="text-[#F5F1EA]/60">{subscribers.length} total subscribers</p>
        </div>
        <Button variant="gold" onClick={handleExport}>
          <Download className="w-5 h-5 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="bg-[#1A1A1C] border border-[#F5F1EA]/10 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0B0B0C]">
            <tr>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Name</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Email</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Subscribed</th>
              <th className="text-right p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id} className="border-t border-[#F5F1EA]/5 hover:bg-[#F5F1EA]/5">
                <td className="p-4 text-[#F5F1EA]">{subscriber.name}</td>
                <td className="p-4 text-[#F5F1EA]/70">{subscriber.email}</td>
                <td className="p-4 text-[#F5F1EA]/70">
                  {new Date(subscriber.subscribedAt).toLocaleDateString()}
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleDelete(subscriber.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
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
