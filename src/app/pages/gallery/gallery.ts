import { Component, OnInit, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';
import { SeoService } from '../../service/seo.service';
import { GalleryService } from '../../service/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink, PageHero],
  templateUrl: './gallery.html',
  styleUrls: [
    './gallery.scss',
    './gallery-lightbox.scss',
  ],
})
export class Gallery implements OnInit {
  private platformId = inject(PLATFORM_ID);
  readonly galleryService = inject(GalleryService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly wallSystems = ['All', ...new Set(this.galleryService.items.map(i => i.wallSystem))];
  readonly styles = ['All', ...new Set(this.galleryService.items.map(i => i.style))];

  selectedWallSystem = signal<string>('All');
  selectedStyle = signal<string>('All');

  filteredItems = computed(() => {
    const ws = this.selectedWallSystem();
    const st = this.selectedStyle();
    return this.galleryService.items.filter(item =>
      (ws === 'All' || item.wallSystem === ws) &&
      (st === 'All' || item.style === st)
    );
  });

  loaded = signal<boolean[]>(new Array(this.galleryService.items.length).fill(false));

  lightboxOpen = signal(false);
  lightboxIndex = signal(0);
  lightboxItem = computed(() => this.filteredItems()[this.lightboxIndex()]);

  zoomScale = signal(1);
  panX = signal(0);
  panY = signal(0);
  isDragging = signal(false);
  private _dragStart: { x: number; y: number; px: number; py: number } | null = null;

  constructor() {
    inject(SeoService).set({
      title: 'Bathroom Design Gallery',
      description:
        'Browse our curated gallery of stunning bathroom transformations on the Monterey Peninsula. Get inspired for your next shower remodel with New Bath Expo — real projects, real results.',
      keywords:
        'bathroom design gallery, shower remodel photos, bathroom renovation monterey, before after bathroom remodel, New Bath Expo bathroom designs',
      canonical: '/gallery',
      ogImage: 'https://www.newbathexpo.com/assets/baths/5.jpg',
    });
  }

  ngOnInit() {
    const viewParam = this.route.snapshot.queryParamMap.get('view');
    if (viewParam) {
      const title = viewParam.replace(/_/g, ' ');
      const index = this.filteredItems().findIndex(
        (g) => g.title.toLowerCase() === title.toLowerCase()
      );
      if (index !== -1) {
        this.openLightbox(index, false);
      }
    }
  }

  setWallSystem(ws: string) {
    this.selectedWallSystem.set(ws);
    if (this.lightboxOpen()) this.closeLightbox();
  }

  setStyle(st: string) {
    this.selectedStyle.set(st);
    if (this.lightboxOpen()) this.closeLightbox();
  }

  onImageLoad(index: number) {
    this.loaded.update((arr) => {
      const copy = [...arr];
      copy[index] = true;
      return copy;
    });
  }

  openLightbox(index: number, updateUrl = true) {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    this.resetZoom();
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
    if (updateUrl) {
      const item = this.galleryService.items[index];
      this.router.navigate([], {
        queryParams: { view: item.title.replace(/ /g, '_').toLowerCase() },
        replaceUrl: true,
      });
    }
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    this.resetZoom();
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
    this.router.navigate([], { queryParams: {}, replaceUrl: true });
  }

  zoomIn() {
    this.zoomScale.update(s => Math.min(s + 0.5, 4));
  }

  zoomOut() {
    this.zoomScale.update(s => {
      const n = Math.max(s - 0.5, 1);
      if (n === 1) { this.panX.set(0); this.panY.set(0); }
      return n;
    });
  }

  resetZoom() {
    this.zoomScale.set(1);
    this.panX.set(0);
    this.panY.set(0);
    this.isDragging.set(false);
    this._dragStart = null;
  }

  onDragStart(e: MouseEvent | TouchEvent) {
    e.stopPropagation();
    if (this.zoomScale() <= 1) return;
    const point = e instanceof TouchEvent ? e.touches[0] : e;
    this._dragStart = { x: point.clientX, y: point.clientY, px: this.panX(), py: this.panY() };
    this.isDragging.set(true);
  }

  onDragMove(e: MouseEvent | TouchEvent) {
    if (!this._dragStart) return;
    const point = e instanceof TouchEvent ? e.touches[0] : e;
    this.panX.set(this._dragStart.px + (point.clientX - this._dragStart.x));
    this.panY.set(this._dragStart.py + (point.clientY - this._dragStart.y));
  }

  onDragEnd() {
    this._dragStart = null;
    this.isDragging.set(false);
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.resetZoom();
    const total = this.filteredItems().length;
    this.lightboxIndex.update((i) => (i - 1 + total) % total);
    this.updateUrlForCurrent();
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.resetZoom();
    const total = this.filteredItems().length;
    this.lightboxIndex.update((i) => (i + 1) % total);
    this.updateUrlForCurrent();
  }

  private updateUrlForCurrent() {
    const item = this.galleryService.items[this.lightboxIndex()];
    this.router.navigate([], {
      queryParams: { view: item.title.replace(/ /g, '_').toLowerCase() },
      replaceUrl: true,
    });
  }

  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevImage(event);
    if (event.key === 'ArrowRight') this.nextImage(event);
  }
}
