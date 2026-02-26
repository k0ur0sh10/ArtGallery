export interface Painting {
  id: string;
  title: string;
  description: string;
  price: number;
  dimensions: string;
  medium: string;
  year: number;
  collection: string;
  availability: 'available' | 'sold' | 'reserved';
  images: string[];
  tags: string[];
  featured: boolean;
  isPrint?: boolean;
  printStock?: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  bannerImage: string;
  isPaid: boolean;
  price?: number;
  availableSeats?: number;
  eventType: 'exhibition' | 'gallery' | 'workshop' | 'private';
}

export interface CartItem {
  painting: Painting;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  orderDate: string;
}

export interface NewsletterSubscriber {
  id: string;
  name: string;
  email: string;
  subscribedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
}
