import { Injectable } from '@angular/core';

export interface ServiceItem {
  label: string;
  description: string;
}

export interface Accessory {
  id: string;
  label: string;
  imageUrl: string;
}

export interface ProcessStep {
  number: string;
  description: string;
}

export interface PricingItem {
  title: string;
  price: string;
  featured: boolean;
}

export interface PortfolioItem {
  title: string;
  style: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  quote: string;
  source: 'google' | 'yelp';
  reviewUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  services: ServiceItem[] = [
    {
      label: 'Natural Beauty',
      description: 'Capture the look of stone without the maintenance and cleaning hassles of real stone.',
    },
    {
      label: 'Colors',
      description: 'We offer a variety of colors and looks to fit any style — from classic to contemporary.',
    },
    {
      label: 'Easy Maintenance',
      description: 'Lifetime warranty for ultimate peace of mind. Easy to clean, resists mold and bacteria.',
    },
  ];

  steps: ProcessStep[] = [
    { number: '01', description: 'Schedule your FREE virtual or in-home consultation.' },
    { number: '02', description: 'Our estimators will show you our extensive collection of samples.' },
    { number: '03', description: 'Your order is placed, and we wait for product arrival (2 weeks).' },
    { number: '04', description: 'Installation begins and will be completed within 2 – 5 days, depending on scope of project.' },
    { number: '05', description: 'Enjoy your beautiful new bathroom that will last a lifetime!' },
  ];

  pricing: PricingItem[] = [
    { title: 'Free In-Home or Virtual Consultation', price: 'Free', featured: false },
    { title: 'Tub-to-Shower Remodel', price: '$12k – $18k', featured: false },
    { title: 'Walk-in Tub Remodel', price: '$12k – $18k', featured: true },
    { title: 'Full Bathroom Remodel', price: '$17k – $28k', featured: false },
  ];

  portfolio: PortfolioItem[] = [
    {
      title: 'Rustic Charm',
      style: 'Sophisticated Style',
      description: 'Inspired by the surrounding environment, this project combines elegance with functionality. If you admire this aesthetic, let us tailor a design just for you.',
      image: 'assets/portfolio/rustic-charm.jpg',
    },
    {
      title: 'Luxurious Retreat',
      style: 'Modern Elegance',
      description: 'In this contemporary space, we\'ve created a harmonious blend of modern design elements. Contact us to start designing your dream space.',
      image: 'assets/portfolio/luxurious-retreat.jpg',
    },
    {
      title: 'Tranquil Oasis',
      style: 'Relaxation Zone',
      description: 'Transform your space with a sleek, sophisticated decor that exudes relaxation. Let us elevate your next project. Get in touch with us today.',
      image: 'assets/portfolio/tranquil-oasis.jpg',
    },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Yousara C.',
      rating: 5,
      quote: 'New Bath Expo did an incredible job with our new walk-in bathtub. I appreciated how transparent they were about pricing and timelines, everything went exactly as promised. The installers were friendly, efficient & clearly knew their craft.',
      source: 'google',
      reviewUrl: 'https://share.google/9ecx8T17VxKv8axzR',
    },
    {
      name: 'Remi B.',
      rating: 5,
      quote: 'We decided recently, to convert our bathroom to a roll in shower. The work was completed on time, as promised. The bathroom is now not only more functional and stylish, but also a valuable asset to the house.',
      source: 'google',
      reviewUrl: 'https://share.google/RMGklv7qEm0pK4aUX',
    },
    {
      name: 'Joan N.',
      rating: 5,
      quote: 'GOLD. Companies like this are GOLD. They\'re family owned, they\'re nice, they made me feel normal — and they didn\'t try to tack on a bunch of endless bills. They care about their society and people. So wonderful.',
      source: 'google',
      reviewUrl: 'https://share.google/FLTSHpYPVNmF5Ohuz',
    },
    {
      name: 'Rhandal S.',
      rating: 5,
      quote: 'I am absolutely delighted with the results of my fully remodeled bathroom. The team was highly professional, and the communication was prompt throughout the process. The outcome exceeded my expectations.',
      source: 'google',
      reviewUrl: 'https://share.google/eSKsatRNBXK5HARGy',
    },
    {
      name: 'Dave M.',
      rating: 5,
      quote: 'Ed Robbins is great about staying in touch every step along the way. Substantial modifications were required for my roll-in shower and Ed and his crew found a way to do that beautifully. I highly recommend New Bath Expo.',
      source: 'google',
      reviewUrl: 'https://share.google/XcqsrzuSDxGQkSLJf',
    },
    {
      name: 'Sassy A.',
      rating: 5,
      quote: "We're just getting started with our second bathroom remodel and so far the New Bath Expo team has been instrumental in getting everything started. They've been very punctual with communication and the cost within my budget. We'll update this review when the job is done.",
      source: 'yelp',
      reviewUrl: 'https://www.yelp.com/biz/new-bath-expo-carmel-3?hrid=iGlATGhfksR6UpyngvGvVQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)',
    },
    {
      name: 'Lorraine S.',
      rating: 5,
      quote: "I love my new walk in shower conversion done by New Bath Expo. It came out so beautiful and much more than I expected. I wish I had done this a lot sooner. No stepping on stools to get in the bath tub to take a shower. I highly recommend them. They made me very happy.They also included a new floor and extended the floor to the vanity area. It was like getting a whole new bathroom for the price of a tub to walk in conversion.",
      source: 'yelp',
      reviewUrl: 'https://www.yelp.com/biz/new-bath-expo-carmel-3?hrid=DSKSexQKBXDaUTHjKdLxLQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)',
    },
    {
      name: 'Amir Z.',
      rating: 5,
      quote: "Great service always would recommend to my friends and they are passionate about what they do and they get done things done efficiently in a timely manner and they're always go above and beyond with everything they do. Great price points and affordable with my budget. Always going through with services with me and stick by me with updates as they go through the renovations. It's always great, coming home and seeing a masterpiece.",
      source: 'yelp',
      reviewUrl: 'https://www.yelp.com/biz/new-bath-expo-carmel-3?hrid=JxjyjAW2oyk_PuBvk4kqNQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)',
    },
  ];

  accessories: Accessory[] = [
    { id: '12', label: 'Shave Shelf', imageUrl: 'assets/shower_accessories/shave_shelf.png' },
    { id: '6', label: 'Corner Shelf', imageUrl: 'assets/shower_accessories/corner_shelf.png' },
    { id: '13', label: 'Shower Bench', imageUrl: 'assets/shower_accessories/shower_bench.png' },
    { id: '14', label: 'Stainless Steel Caddy', imageUrl: 'assets/shower_accessories/stainless_caddy.png' },
    { id: '2', label: '3" Seam Strip', imageUrl: 'assets/shower_accessories/3inch_seam_strip.png' },
    { id: '7', label: 'Inside Corner Trim', imageUrl: 'assets/shower_accessories/inside_corner_trim.png' },
    { id: '3', label: '6" Standard Trim', imageUrl: 'assets/shower_accessories/6_inch_standard_trim.png' },
    { id: '15', label: 'Standard Trim', imageUrl: 'assets/shower_accessories/standard_trim.png' },
    { id: '11', label: 'Remodel Trim', imageUrl: 'assets/shower_accessories/remodel_trim.png' },
    { id: '4', label: '6" Trim w/ 2" Lip', imageUrl: 'assets/shower_accessories/6nc_trim_w2lip.png' },
    { id: '16', label: 'Window Trim', imageUrl: 'assets/shower_accessories/window_trim.png' },
    { id: '8', label: '1.5" Outside Corner Trim', imageUrl: 'assets/shower_accessories/outside_corner_trim.png' },
    { id: '1', label: '3" Outside Corner Trim', imageUrl: 'assets/shower_accessories/3inch_outside_corner_trim.png' },
    { id: '9', label: 'Recessed Caddy 17x26', imageUrl: 'assets/shower_accessories/recessed_caddy.png' },
    { id: '10', label: 'Recessed Caddy 17x17', imageUrl: 'assets/shower_accessories/recessed_caddy_box.png' },
    { id: '5', label: 'Corner Seat', imageUrl: 'assets/shower_accessories/corner_seat.png' },
    { id: '17', label: 'Window Trim Kit', imageUrl: 'assets/shower_accessories/window_trim_kit.png' }
  ];
}
