import { Injectable } from '@angular/core';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  /** Used in the heading: "Frequently Asked Questions about {name}" */
  name: string;
  image: string;
  items: FaqItem[];
}

@Injectable({ providedIn: 'root' })
export class FaqService {
  private readonly data: Record<string, FaqData> = {
    shower_bases: {
      name: 'Shower Bases',
      image: 'assets/baths/11.jpg',
      items: [
        {
          question: 'How Do New Bath Expo Shower Floors and Bases Compare to Traditional Tile Bases in Terms of Durability?',
          answer: 'New Bath Expo shower bases are as durable as they are beautiful. They are designed to last longer than traditional tile floors and require less maintenance. Additionally, with our Nano Grip® non-slip surface technology, our shower floors provide a safe flooring solution for homes, multi-family complexes, and hospitality settings.',
        },
        {
          question: 'Do New Bath Expo Shower Bases Come With a Warranty?',
          answer: 'Yes, our products come with a lifetime warranty, ensuring peace of mind and long-term protection for your investment.',
        },
        {
          question: 'How Do I Clean and Maintain a New Bath Expo Shower Base?',
          answer: 'We recommend using mild, non-abrasive cleaners to clean New Bath Expo products to maintain appearance and longevity.',
        },
      ]
    },

    shower_walls: {
      name: 'Shower Walls',
      image: 'assets/baths/10.jpg',
      items: [
        {
          question: 'What cleaning products are safe to use on New Bath Expo shower walls?',
          answer: 'We recommend using mild, non-abrasive cleaners. Avoid harsh chemicals or abrasive materials that could damage the surface.'
        },
        {
          question: 'What type of backer board can be used with New Bath Expo shower wall panels?',
          answer: 'Our products can be glued to any backer material, but the specific material should be chosen based on local building codes and requirements.',
        },
        {
          question: 'Can New Bath Expo shower wall panels be use with bathtubs?',
          answer: 'Yes, our waterproof shower wall panels can also be used as bathtub shower walls.'
        }
      ]
    },

    shower_accessories: {
      name: 'Shower Accessories',
      image: 'assets/baths/1.jpg',
      items: [
        {
          question: 'Can New Bath Expo accessories be installed in any type of shower?',
          answer: 'Yes, New Bath Expo shower accessories are versatile and can be installed in various shower types, whether you have a standard, custom, or modular setup.',
        },
        {
          question: 'Are New Bath Expo accessories easy to install?',
          answer: 'Yes, our products are designed for easy installation, allowing contractors to quickly upgrade a shower space in as little as one day. Our shower shelves feature sturdy metal brackets, ensuring a quick and secure installation process.',
        },
      ]
    },

    products: {
      name: 'Shower Systems',
      image: 'assets/baths/9.jpg',
      items: [
        {
          question: 'Are New Bath Expo systems easy to install?',
          answer: 'Yes, New Bath Expo shower systems are designed for easy installation, whether you’re a contractor or a DIY enthusiast. Our systems can be installed in as little as one day.',
        },
        {
          question: 'Do New Bath Expo shower systems require special maintenance?',
          answer: 'New Bath Expo shower systems are designed for easy maintenance. Simply clean them with mild, non-abrasive cleaners to keep them looking new.',
        },
        {
          question: 'Can New Bath Expo products be used in commercial settings?',
          answer: 'Yes, our products are suitable for both residential and commercial settings, offering a versatile solution for a wide range of projects, from single-family homes to ',
        },
        {
          question: 'What are the average lead times for materials?',
          answer: 'New Bath Expo manufacturers and ships all products out of its facility in Orem, Utah, ensuring the fastest lead times in the industry: just 7-10 business days.',
        },
      ],
    },

    shower_colors: {
      name: 'Shower Wall Materials',
      image: 'assets/baths/8.jpg',
      items: [
        {
          question: 'How are New Bath Expo products constructed?',
          answer: 'Sentrel products are constructed using a multilayered composite material. One of the many layers is the image layer, which ensures the high-quality replication of natural stone. No matter what style you’re looking for, you can have peace of mind knowing you have the same high-quality product.'
        },
        {
          question: `How do New Bath Expo's shower wall panels compare to real stone?`,
          answer: 'Sentrel shower wall panels capture the intricate details and patterns of real stone through an advanced scanning process. They offer the same luxurious appearance without the high cost and maintenance requirements of natural stone.'
        },
      ]
    }
  };

  /** Returns the FAQ data for a given page key, or null if not found. */
  get(page: string): FaqData | null {
    return this.data[page] ?? null;
  }
}
