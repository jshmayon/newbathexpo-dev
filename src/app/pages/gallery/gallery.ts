import { Component, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';
import { SeoService } from '../../service/seo.service';
import { GalleryService } from '../../service/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink, PageHero],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  private platformId = inject(PLATFORM_ID);
  readonly galleryService = inject(GalleryService);

  loaded = signal<boolean[]>(new Array(this.galleryService.items.length).fill(false));

  lightboxOpen = signal(false);
  lightboxIndex = signal(0);
  lightboxItem = computed(() => this.galleryService.items[this.lightboxIndex()]);
  lightboxFull = signal(false);

  constructor() {
    inject(SeoService).set({
      title: 'Bathroom Design Gallery',
      description:
        'Browse our curated gallery of stunning bathroom transformations on the Monterey Peninsula. Get inspired for your next shower remodel with New Bath Expo — real projects, real results.',
      keywords:
        'bathroom design gallery, shower remodel photos, bathroom renovation monterey, before after bathroom remodel, sentrel bathroom designs',
      canonical: '/gallery',
      ogImage: 'https://www.newbathexpo.com/assets/baths/5.jpg',
    });
  }

  onImageLoad(index: number) {
    this.loaded.update((arr) => {
      const copy = [...arr];
      copy[index] = true;
      return copy;
    });
  }

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    this.lightboxFull.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    this.lightboxFull.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  toggleFull(event: Event) {
    event.stopPropagation();
    this.lightboxFull.update(v => !v);
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.lightboxFull.set(false);
    const total = this.galleryService.items.length;
    this.lightboxIndex.update((i) => (i - 1 + total) % total);
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.lightboxFull.set(false);
    const total = this.galleryService.items.length;
    this.lightboxIndex.update((i) => (i + 1) % total);
  }

  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevImage(event);
    if (event.key === 'ArrowRight') this.nextImage(event);
  }
}
