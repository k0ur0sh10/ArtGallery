import { Painting, Event, Order, NewsletterSubscriber, Testimonial } from '../types';

export const mockPaintings: Painting[] = [
  {
    id: '1',
    title: 'Ethereal Dawn',
    description: 'A mesmerizing exploration of light and shadow, this piece captures the fleeting moment between night and day. The interplay of warm golds and deep blacks creates a sense of timeless elegance.',
    price: 12500,
    dimensions: '48 × 60 inches',
    medium: 'Oil on Canvas',
    year: 2024,
    collection: 'Luminescence',
    availability: 'available',
    images: [
      'https://images.unsplash.com/photo-1536241455566-5709c3aefd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbnRlbXBvcmFyeSUyMHBhaW50aW5nJTIwYXJ0fGVufDF8fHx8MTc3MjA2NDMxOXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tags: ['abstract', 'gold', 'luxury'],
    featured: true
  },
  {
    id: '2',
    title: 'Chromatic Reverie',
    description: 'Bold strokes and vibrant hues dance across the canvas in this contemporary masterpiece. A celebration of color, emotion, and the raw energy of creative expression.',
    price: 15000,
    dimensions: '60 × 72 inches',
    medium: 'Acrylic on Canvas',
    year: 2024,
    collection: 'Contemporary',
    availability: 'available',
    images: [
      'https://images.unsplash.com/photo-1734549097890-d5afb4500e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYXJ0d29ya3xlbnwxfHx8fDE3NzIwNjQzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tags: ['colorful', 'contemporary', 'bold'],
    featured: true
  },
  {
    id: '3',
    title: 'Golden Horizons',
    description: 'Inspired by the opulence of ancient civilizations, this work merges traditional techniques with modern sensibilities. The lustrous gold leaf creates an ever-changing visual experience.',
    price: 18500,
    dimensions: '54 × 84 inches',
    medium: 'Mixed Media with Gold Leaf',
    year: 2023,
    collection: 'Gilded',
    availability: 'sold',
    images: [
      'https://images.unsplash.com/photo-1759392059291-905bbcd9bb98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwYWJzdHJhY3QlMjBwYWludGluZ3xlbnwxfHx8fDE3NzIwMjIwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tags: ['gold', 'luxury', 'mixed-media'],
    featured: true
  },
  {
    id: '4',
    title: 'Minimal Essence',
    description: 'Less is more in this refined composition. Clean lines and subtle tonal variations create a meditative space that invites quiet contemplation.',
    price: 9500,
    dimensions: '36 × 48 inches',
    medium: 'Oil on Linen',
    year: 2024,
    collection: 'Minimalist',
    availability: 'available',
    images: [
      'https://images.unsplash.com/photo-1767614373251-94259ec635f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29udGVtcG9yYXJ5JTIwYXJ0JTIwY2FudmFzfGVufDF8fHx8MTc3MjA2NDMyMHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tags: ['minimal', 'contemporary', 'serene'],
    featured: false
  },
  {
    id: '5',
    title: 'Gallery Nocturne',
    description: 'A sophisticated study in contrast and balance. This piece transforms any space into an intimate gallery experience, perfect for the discerning collector.',
    price: 11000,
    dimensions: '48 × 48 inches',
    medium: 'Oil on Canvas',
    year: 2024,
    collection: 'Contemporary',
    availability: 'available',
    images: [
      'https://images.unsplash.com/photo-1703166233941-87576e65d571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbW9kZXJuJTIwYXJ0d29yayUyMGdhbGxlcnl8ZW58MXx8fHwxNzcyMDY0MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tags: ['elegant', 'modern', 'gallery'],
    featured: false
  },
  {
    id: '6',
    title: 'Textural Symphony',
    description: 'Rich layers of acrylic create a tactile feast for the senses. The vibrant textures seem to shift and breathe with the changing light.',
    price: 13500,
    dimensions: '52 × 68 inches',
    medium: 'Acrylic on Canvas',
    year: 2023,
    collection: 'Contemporary',
    availability: 'reserved',
    images: [
      'https://images.unsplash.com/photo-1597805258643-c63aa49fe7bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwYWNyeWxpYyUyMHBhaW50aW5nJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzIwMTU2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tags: ['textured', 'vibrant', 'acrylic'],
    featured: false
  },
  {
    id: '7',
    title: 'Studio Meditation',
    description: 'Created in a moment of pure inspiration, this work embodies the intimate connection between artist and canvas. Each brushstroke tells a story.',
    price: 10500,
    dimensions: '40 × 50 inches',
    medium: 'Oil on Canvas',
    year: 2024,
    collection: 'Studio Series',
    availability: 'available',
    images: [
      'https://images.unsplash.com/photo-1758522274945-7f000385a3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHN0dWRpbyUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc3MjA2NDMyMXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tags: ['studio', 'intimate', 'expressive'],
    featured: false
  },
  {
    id: '8',
    title: 'Exhibition Premiere',
    description: 'The centerpiece of our latest gallery showing. This commanding work demands attention and rewards close viewing with subtle details and nuanced compositions.',
    price: 16500,
    dimensions: '66 × 90 inches',
    medium: 'Mixed Media on Canvas',
    year: 2024,
    collection: 'Gallery Collection',
    availability: 'available',
    images: [
      'https://images.unsplash.com/photo-1761933296161-073ce9f8ab36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwZ2FsbGVyeSUyMGV4aGliaXRpb24lMjBhcnR8ZW58MXx8fHwxNzcyMDY0MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tags: ['exhibition', 'large-format', 'sophisticated'],
    featured: true
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Luminescence: A Solo Exhibition',
    description: 'Join us for the opening of my latest collection exploring themes of light, shadow, and the ephemeral nature of beauty. This intimate exhibition features 12 new works created specifically for this showing.',
    date: '2026-03-15',
    time: '18:00 - 22:00',
    location: 'Maison Gallery, Soho, New York',
    bannerImage: 'https://images.unsplash.com/photo-1718359760007-4b11d377689c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcnQlMjBnYWxsZXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyMDY0MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isPaid: false,
    eventType: 'exhibition'
  },
  {
    id: '2',
    title: 'Collectors Evening: Private Viewing',
    description: 'An exclusive evening for collectors and art enthusiasts. Preview new works before they are released to the public, enjoy champagne and canapés, and meet the artist.',
    date: '2026-04-08',
    time: '19:00 - 23:00',
    location: 'Private Studio, Chelsea, New York',
    bannerImage: 'https://images.unsplash.com/photo-1703166233941-87576e65d571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbW9kZXJuJTIwYXJ0d29yayUyMGdhbGxlcnl8ZW58MXx8fHwxNzcyMDY0MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isPaid: true,
    price: 250,
    availableSeats: 30,
    eventType: 'private'
  },
  {
    id: '3',
    title: 'Art & Conversation: Creative Process Workshop',
    description: 'A hands-on workshop exploring contemporary painting techniques and creative philosophy. Limited to 15 participants for an intimate learning experience.',
    date: '2026-05-20',
    time: '14:00 - 18:00',
    location: 'Studio Atelier, Brooklyn',
    bannerImage: 'https://images.unsplash.com/photo-1758522274945-7f000385a3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHN0dWRpbyUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc3MjA2NDMyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    isPaid: true,
    price: 450,
    availableSeats: 15,
    eventType: 'workshop'
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Victoria Ashford',
    role: 'Private Collector',
    quote: 'Her work transcends the canvas. Each piece is a meditation on beauty, a conversation between light and shadow that never grows old.'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Art Director, Vogue',
    quote: 'A rare talent who brings editorial sophistication to contemporary painting. Her aesthetic is unmistakably modern yet timeless.'
  },
  {
    id: '3',
    name: 'Elena Dubois',
    role: 'Curator, Museum of Modern Art',
    quote: 'One of the most exciting voices in contemporary art. Her use of color and texture creates spaces that are both intimate and monumental.'
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    items: [
      {
        painting: mockPaintings[0],
        quantity: 1
      }
    ],
    total: 12500,
    status: 'delivered',
    paymentStatus: 'paid',
    customerName: 'James Wellington',
    customerEmail: 'james.w@example.com',
    shippingAddress: '123 Park Avenue, New York, NY 10022',
    orderDate: '2026-01-15'
  },
  {
    id: 'ORD-002',
    items: [
      {
        painting: mockPaintings[1],
        quantity: 1
      }
    ],
    total: 15000,
    status: 'processing',
    paymentStatus: 'paid',
    customerName: 'Sophie Laurent',
    customerEmail: 'sophie@example.com',
    shippingAddress: '456 Fifth Avenue, New York, NY 10018',
    orderDate: '2026-02-20'
  }
];

export const mockSubscribers: NewsletterSubscriber[] = [
  {
    id: '1',
    name: 'Alexandra Morgan',
    email: 'alexandra@example.com',
    subscribedAt: '2026-01-10'
  },
  {
    id: '2',
    name: 'David Chen',
    email: 'david.chen@example.com',
    subscribedAt: '2026-01-25'
  }
];
