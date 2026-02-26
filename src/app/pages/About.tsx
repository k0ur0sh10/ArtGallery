import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Eye } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const About: React.FC = () => {
  const timeline = [
    { year: '2024', event: 'Solo Exhibition at Maison Gallery, New York' },
    { year: '2023', event: 'Featured in Architectural Digest\'s "Artists to Watch"' },
    { year: '2022', event: 'Residency at Paris Atelier des Beaux-Arts' },
    { year: '2021', event: 'Graduated MFA, Royal College of Art, London' },
    { year: '2019', event: 'First Solo Exhibition at Gallery Moderne, London' },
  ];

  const press = [
    {
      publication: 'Vogue',
      quote: 'Rousseau\'s work brings a fresh perspective to contemporary abstraction.',
    },
    {
      publication: 'Architectural Digest',
      quote: 'A master of texture and light, creating spaces that transcend the canvas.',
    },
    {
      publication: 'The New York Times',
      quote: 'Her paintings invite viewers into a world where elegance meets raw emotion.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#F5F1EA]">
      {/* Hero */}
      <section className="py-16 px-6 lg:px-12 bg-[#0B0B0C]">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-5xl md:text-6xl text-[#F5F1EA] mb-6"
          >
            About the Artist
          </motion.h1>
        </div>
      </section>

      {/* Portrait & Bio */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664895080273-b9024dd4b609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmVtYWxlJTIwYXJ0aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMDY0MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elena Rousseau"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-3xl md:text-4xl text-[#0B0B0C] mb-6">
                Elena Rousseau
              </h2>
              <div className="space-y-4 text-[#0B0B0C]/80 text-base md:text-lg leading-relaxed">
                <p>
                  Elena Rousseau is a contemporary painter whose work explores the delicate balance
                  between classical beauty and modern abstraction. Born in Paris and educated in London,
                  her multicultural background informs every brushstroke.
                </p>
                <p>
                  Her paintings are held in private collections across New York, Paris, London, and Tokyo.
                  Each piece is created with meticulous attention to texture, composition, and the ephemeral
                  quality of light.
                </p>
                <p>
                  Working primarily in oil and mixed media, Elena's process is both disciplined and
                  intuitive. She begins each work with careful planning but allows room for spontaneity,
                  creating pieces that feel both considered and alive.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 md:p-12 mb-16 md:mb-24"
          >
            <div className="max-w-4xl mx-auto text-center">
              <Eye className="w-10 h-10 md:w-12 md:h-12 text-[#C6A75E] mx-auto mb-6" />
              <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl md:text-3xl text-[#0B0B0C] mb-6">
                Artistic Philosophy
              </h3>
              <p className="text-[#0B0B0C]/80 text-base md:text-lg leading-relaxed italic">
                "Art is not about perfection—it's about presence. Each painting is an invitation to pause,
                to notice, to feel. I work with color and texture to create spaces of contemplation,
                where viewers can discover their own meaning and connection. My goal is to make work that
                feels timeless yet immediate, elegant yet honest."
              </p>
              <p className="text-[#0B0B0C] mt-6">— Elena Rousseau</p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="mb-16 md:mb-24">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-3xl md:text-4xl text-[#0B0B0C] mb-12 text-center"
            >
              Timeline
            </motion.h3>

            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4 md:gap-8 items-start"
                >
                  <div className="flex-shrink-0 w-16 md:w-24">
                    <span className="text-xl md:text-2xl text-[#C6A75E]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 border-l-2 border-[#C6A75E] pl-4 md:pl-8 pb-6 md:pb-8">
                    <p className="text-[#0B0B0C] text-base md:text-lg">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Press */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-4xl text-[#0B0B0C] mb-12 text-center"
            >
              Press & Recognition
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {press.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="bg-white p-8"
                >
                  <Award className="w-8 h-8 text-[#C6A75E] mb-4" />
                  <p className="text-[#0B0B0C]/80 italic mb-4">
                    "{item.quote}"
                  </p>
                  <p className="text-sm uppercase tracking-wider text-[#0B0B0C]">
                    — {item.publication}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};