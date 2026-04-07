import { Component, ElementRef, ViewChild, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ContentService } from '../../service/content';

const AVATAR_COLORS = [
  '#e11d48', '#db2777', '#9333ea', '#7c3aed',
  '#2563eb', '#0891b2', '#059669', '#d97706',
  '#ea580c', '#16a34a',
];

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  @ViewChild('track') trackRef!: ElementRef<HTMLElement>;
  private platformId = inject(PLATFORM_ID);
  private contentService = inject(ContentService);

  items = this.contentService.testimonials;

  avatarColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
  }

  scroll(dir: 'prev' | 'next') {
    if (!isPlatformBrowser(this.platformId)) return;
    const track = this.trackRef.nativeElement;
    const card = track.querySelector('.testimonial-card') as HTMLElement;
    const amount = card ? card.offsetWidth + 24 : 340;
    track.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  }
}
