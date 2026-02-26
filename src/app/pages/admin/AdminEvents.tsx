import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { mockEvents } from '../../data/mockData';
import { Button } from '../../components/Button';

export const AdminEvents: React.FC = () => {
  const [events, setEvents] = useState(mockEvents);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl text-[#F5F1EA] mb-2">
            Events
          </h1>
          <p className="text-[#F5F1EA]/60">Manage exhibitions and gatherings</p>
        </div>
        <Button variant="gold">
          <Plus className="w-5 h-5 mr-2" />
          Add New Event
        </Button>
      </div>

      <div className="bg-[#1A1A1C] border border-[#F5F1EA]/10 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0B0B0C]">
            <tr>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Title</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Date</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Location</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Type</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Price</th>
              <th className="text-right p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t border-[#F5F1EA]/5 hover:bg-[#F5F1EA]/5">
                <td className="p-4 text-[#F5F1EA]">{event.title}</td>
                <td className="p-4 text-[#F5F1EA]/70">
                  {new Date(event.date).toLocaleDateString()}
                </td>
                <td className="p-4 text-[#F5F1EA]/70">{event.location}</td>
                <td className="p-4">
                  <span className="px-3 py-1 text-xs uppercase tracking-wider bg-[#C6A75E]/20 text-[#C6A75E] rounded">
                    {event.eventType}
                  </span>
                </td>
                <td className="p-4 text-[#C6A75E]">
                  {event.isPaid ? `$${event.price}` : 'Free'}
                </td>
                <td className="p-4 text-right">
                  <button className="text-[#C6A75E] hover:text-[#A88B4A] mr-3">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
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
