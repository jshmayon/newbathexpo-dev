import { Component, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

interface GalleryImage {
  src: string;
  alt: string;
  loaded: boolean;
}

@Component({
  selector: 'app-gallery',
  imports: [RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);
  private titleService = inject(Title);

  // All bath images from assets/baths
  images = signal<GalleryImage[]>([
    { src: 'assets/baths/1.jpg', alt: 'Bathroom Design 1', loaded: false },
    { src: 'assets/baths/2.jpg', alt: 'Bathroom Design 2', loaded: false },
    { src: 'assets/baths/4.jpg', alt: 'Bathroom Design 3', loaded: false },
    { src: 'assets/baths/5.jpg', alt: 'Bathroom Design 4', loaded: false },
    { src: 'assets/baths/6.jpg', alt: 'Bathroom Design 5', loaded: false },
    { src: 'assets/baths/7.jpg', alt: 'Bathroom Design 6', loaded: false },
    { src: 'assets/baths/8.jpg', alt: 'Bathroom Design 7', loaded: false },
    { src: 'assets/baths/9.jpg', alt: 'Bathroom Design 8', loaded: false },
    { src: 'assets/baths/10.jpg', alt: 'Bathroom Design 9', loaded: false },
    { src: 'assets/baths/11.jpg', alt: 'Bathroom Design 10', loaded: false },
    { src: 'assets/baths/12.jpg', alt: 'Bathroom Design 11', loaded: false },
    { src: 'assets/baths/13.jpg', alt: 'Bathroom Design 12', loaded: false },
    { src: 'assets/baths/14.jpg', alt: 'Bathroom Design 13', loaded: false },
    { src: 'assets/baths/15.jpg', alt: 'Bathroom Design 14', loaded: false },
    { src: 'assets/baths/16.jpg', alt: 'Bathroom Design 15', loaded: false },
    { src: 'assets/baths/17.jpg', alt: 'Bathroom Design 16', loaded: false },
    { src: 'assets/baths/18.jpg', alt: 'Bathroom Design 17', loaded: false },
    { src: 'assets/baths/20.jpg', alt: 'Bathroom Design 18', loaded: false },
    { src: 'assets/baths/21.jpg', alt: 'Bathroom Design 19', loaded: false },
    { src: 'assets/baths/22.jpg', alt: 'Bathroom Design 20', loaded: false },
    { src: 'assets/baths/23.jpg', alt: 'Bathroom Design 21', loaded: false },
    { src: 'assets/baths/24.jpg', alt: 'Bathroom Design 22', loaded: false },
  ]);

  // Lightbox state
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);
  lightboxImage = computed(() => this.images()[this.lightboxIndex()]);

  constructor() {
    this.titleService.setTitle('Design Gallery — NewBath Expo');
    this.meta.updateTag({ name: 'description', content: 'Browse our curated gallery of stunning bathroom designs. Get inspired for your next bathroom remodel with NewBath Expo.' });
  }

  onImageLoad(index: number) {
    this.images.update(imgs => {
      const updated = [...imgs];
      updated[index] = { ...updated[index], loaded: true };
      return updated;
    });
  }

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  prevImage(event: Event) {
    event.stopPropagation();
    const total = this.images().length;
    this.lightboxIndex.update(i => (i - 1 + total) % total);
  }

  nextImage(event: Event) {
    event.stopPropagation();
    const total = this.images().length;
    this.lightboxIndex.update(i => (i + 1) % total);
  }

  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevImage(event);
    if (event.key === 'ArrowRight') this.nextImage(event);
  }
}
