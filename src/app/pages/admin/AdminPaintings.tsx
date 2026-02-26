import React, { useState } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mockPaintings } from '../../data/mockData';
import { Painting } from '../../types';
import { Button } from '../../components/Button';

export const AdminPaintings: React.FC = () => {
  const [paintings, setPaintings] = useState(mockPaintings);
  const [showModal, setShowModal] = useState(false);
  const [editingPainting, setEditingPainting] = useState<Painting | null>(null);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this painting?')) {
      setPaintings(paintings.filter(p => p.id !== id));
    }
  };

  const handleEdit = (painting: Painting) => {
    setEditingPainting(painting);
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingPainting(null);
    setShowModal(true);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl text-[#F5F1EA] mb-2">
            Paintings
          </h1>
          <p className="text-[#F5F1EA]/60">Manage your artwork collection</p>
        </div>
        <Button variant="gold" onClick={handleAdd}>
          <Plus className="w-5 h-5 mr-2" />
          Add New Painting
        </Button>
      </div>

      {/* Table */}
      <div className="bg-[#1A1A1C] border border-[#F5F1EA]/10 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0B0B0C]">
            <tr>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Image</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Title</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Collection</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Price</th>
              <th className="text-left p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Status</th>
              <th className="text-right p-4 text-[#F5F1EA]/70 text-sm uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paintings.map((painting) => (
              <tr key={painting.id} className="border-t border-[#F5F1EA]/5 hover:bg-[#F5F1EA]/5">
                <td className="p-4">
                  <img src={painting.images[0]} alt={painting.title} className="w-16 h-16 object-cover" />
                </td>
                <td className="p-4">
                  <p className="text-[#F5F1EA]">{painting.title}</p>
                  <p className="text-sm text-[#F5F1EA]/60">{painting.medium}</p>
                </td>
                <td className="p-4 text-[#F5F1EA]/70">{painting.collection}</td>
                <td className="p-4 text-[#C6A75E]">${painting.price.toLocaleString()}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded ${
                    painting.availability === 'available' ? 'bg-green-500/20 text-green-500' :
                    painting.availability === 'reserved' ? 'bg-[#C6A75E]/20 text-[#C6A75E]' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {painting.availability}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleEdit(painting)}
                    className="text-[#C6A75E] hover:text-[#A88B4A] mr-3"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(painting.id)}
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

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <PaintingModal
            painting={editingPainting}
            onClose={() => setShowModal(false)}
            onSave={(painting) => {
              if (editingPainting) {
                setPaintings(paintings.map(p => p.id === painting.id ? painting : p));
              } else {
                setPaintings([...paintings, { ...painting, id: Date.now().toString() }]);
              }
              setShowModal(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface PaintingModalProps {
  painting: Painting | null;
  onClose: () => void;
  onSave: (painting: Painting) => void;
}

const PaintingModal: React.FC<PaintingModalProps> = ({ painting, onClose, onSave }) => {
  const [formData, setFormData] = useState<Painting>(painting || {
    id: '',
    title: '',
    description: '',
    price: 0,
    dimensions: '',
    medium: '',
    year: new Date().getFullYear(),
    collection: '',
    availability: 'available',
    images: [],
    tags: [],
    featured: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0B0B0C]/90 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1A1A1C] border border-[#F5F1EA]/10 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl text-[#F5F1EA]">
            {painting ? 'Edit Painting' : 'Add New Painting'}
          </h2>
          <button onClick={onClose} className="text-[#F5F1EA]/70 hover:text-[#F5F1EA]">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="text-xs uppercase tracking-wider text-[#F5F1EA]/70 mb-2 block">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-[#0B0B0C] border border-[#F5F1EA]/10 px-4 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C6A75E]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#F5F1EA]/70 mb-2 block">Price</label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full bg-[#0B0B0C] border border-[#F5F1EA]/10 px-4 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C6A75E]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#F5F1EA]/70 mb-2 block">Availability</label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value as any })}
                className="w-full bg-[#0B0B0C] border border-[#F5F1EA]/10 px-4 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C6A75E]"
              >
                <option value="available">Available</option>
                <option value="reserved">Reserved</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#F5F1EA]/70 mb-2 block">Collection</label>
              <input
                type="text"
                required
                value={formData.collection}
                onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
                className="w-full bg-[#0B0B0C] border border-[#F5F1EA]/10 px-4 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C6A75E]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#F5F1EA]/70 mb-2 block">Medium</label>
              <input
                type="text"
                required
                value={formData.medium}
                onChange={(e) => setFormData({ ...formData, medium: e.target.value })}
                className="w-full bg-[#0B0B0C] border border-[#F5F1EA]/10 px-4 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C6A75E]"
              />
            </div>

            <div className="col-span-2">
              <label className="text-xs uppercase tracking-wider text-[#F5F1EA]/70 mb-2 block">Description</label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#0B0B0C] border border-[#F5F1EA]/10 px-4 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C6A75E]"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <Button type="submit" variant="gold" className="flex-1">
              {painting ? 'Save Changes' : 'Add Painting'}
            </Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};
