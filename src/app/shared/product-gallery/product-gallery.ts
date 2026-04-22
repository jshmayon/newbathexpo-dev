import { Component, computed, input, signal } from '@angular/core';

export interface GalleryItem {
  imageUrl: string;
  label: string;
}

@Component({
  selector: 'app-product-gallery',
  imports: [],
  templateUrl: './product-gallery.html',
  styleUrl: './product-gallery.scss',
})
export class ProductGallery {
  items = input.required<GalleryItem[]>();
  columns = input<number | null>(null);

  gridTemplateCols = computed(() => {
    const c = this.columns();
    return c ? `repeat(${c}, 1fr)` : 'repeat(auto-fill, minmax(200px, 1fr))';
  });

  lightboxIndex = signal<number | null>(null);

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
  }

  closeLightbox() {
    this.lightboxIndex.set(null);
  }

  nextImage(event: Event) {
    event.stopPropagation();
    const current = this.lightboxIndex();
    if (current !== null) {
      this.lightboxIndex.set((current + 1) % this.items().length);
    }
  }

  prevImage(event: Event) {
    event.stopPropagation();
    const current = this.lightboxIndex();
    if (current !== null) {
      this.lightboxIndex.set((current - 1 + this.items().length) % this.items().length);
    }
  }
}
