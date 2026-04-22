import { Component, OnInit, OnDestroy, signal, computed, PLATFORM_ID, Inject, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../service/seo.service';
import { GalleryService, GalleryItem } from '../../service/gallery.service';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { DesignRequestForm } from '../../shared/design-request-form/design-request-form';

type KioskView = 'home' | 'gallery' | 'products' | 'forms';
type ProductView = 'menu' | 'walls' | 'floors' | 'accessories' | 'colors-menu' | 'colors-stone' | 'colors-simtile' | 'colors-dimensions';

interface ColorSwatch {
  imageUrl: string;
  label: string;
}

@Component({
  selector: 'app-showroom',
  imports: [RouterLink, FormsModule, BookingForm, DesignRequestForm],
  templateUrl: './showroom.html',
  styleUrl: './showroom.scss',
})
export class Showroom implements OnInit, OnDestroy {
  readonly gallery = inject(GalleryService);

  idleVisible = signal(true);
  view = signal<KioskView>('home');
  productView = signal<ProductView>('menu');
  gallerySelected = signal<GalleryItem | null>(null);
  zoomedItem = signal<{ imageUrl: string; label: string } | null>(null);
  quoteOpen = signal(false);
  fabOpen = signal(false);

  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly IDLE_MS = 120_000;
  private activityHandler = () => this.resetIdleTimer();

  breadcrumb = computed(() => {
    const parts: string[] = ['Explore'];
    switch (this.view()) {
      case 'gallery':
        parts.push('Gallery');
        break;
      case 'products':
        parts.push('Products');
        switch (this.productView()) {
          case 'walls':           parts.push('Wall Systems');      break;
          case 'floors':          parts.push('Floors & Bases');    break;
          case 'accessories':     parts.push('Accessories');       break;
          case 'colors-menu':     parts.push('Colors & Trim');     break;
          case 'colors-stone':    parts.push('Colors & Trim', 'Stone Colors');         break;
          case 'colors-simtile':  parts.push('Colors & Trim', 'SimTile');              break;
          case 'colors-dimensions': parts.push('Colors & Trim', 'Dimensions SimTile'); break;
        }
        break;
      case 'forms':
        parts.push('Book Now');
        break;
    }
    return parts;
  });

  stoneColors: ColorSwatch[] = [
    { imageUrl: '/assets/stone_colors/1_black_mist.png',       label: 'Black Mist' },
    { imageUrl: '/assets/stone_colors/2_lincoln_gold.png',     label: 'Lincoln Gold' },
    { imageUrl: '/assets/stone_colors/3_alaskan_ivory.png',    label: 'Alaskan Ivory' },
    { imageUrl: '/assets/stone_colors/4_azzurra_bay.png',      label: 'Azzurra Bay' },
    { imageUrl: '/assets/stone_colors/5_bardiglio.png',        label: 'Bardiglio' },
    { imageUrl: '/assets/stone_colors/6_botticino_cream.png',  label: 'Botticino Cream' },
    { imageUrl: '/assets/stone_colors/7_calabria.png',         label: 'Calabria' },
    { imageUrl: '/assets/stone_colors/8_calacatta-white.png',  label: 'Calacatta White' },
    { imageUrl: '/assets/stone_colors/9_Creme_Travertine.png', label: 'Creme Travertine' },
    { imageUrl: '/assets/stone_colors/10_everest.png',         label: 'Everest' },
    { imageUrl: '/assets/stone_colors/11_frost.png',           label: 'Frost' },
    { imageUrl: '/assets/stone_colors/12_Golden_Beaches.jpg',  label: 'Golden Beaches' },
    { imageUrl: '/assets/stone_colors/13_gray_quartz.png',     label: 'Gray Quartz' },
    { imageUrl: '/assets/stone_colors/14_mocha-travertine.png',label: 'Mocha Travertine' },
    { imageUrl: '/assets/stone_colors/15_Taj_Mahal.png',       label: 'Taj Mahal' },
    { imageUrl: '/assets/stone_colors/16_triton.png',          label: 'Triton' },
    { imageUrl: '/assets/stone_colors/17_veincut-grey.png',    label: 'Veincut Grey' },
    { imageUrl: '/assets/stone_colors/18_white-pearl.png',     label: 'White Pearl' },
  ];

  simtileItems: ColorSwatch[] = [
    { imageUrl: '/assets/simtile/1_white_pear_10x20_simtile.jpg',        label: 'White Pearl 10×20' },
    { imageUrl: '/assets/simtile/2_viencut_gray_10x20_simtile.jpg',      label: 'Veincut Gray 10×20' },
    { imageUrl: '/assets/simtile/3_mocha_travertine_10x20_simtile.jpg',  label: 'Mocha Travertine 10×20' },
    { imageUrl: '/assets/simtile/4_frost_10x20_simtile.jpg',             label: 'Frost 10×20' },
    { imageUrl: '/assets/simtile/5_calacatta_whitee_10x20_simtile.jpg',  label: 'Calacatta White 10×20' },
    { imageUrl: '/assets/simtile/6_white_pearl_3x6_simtile.jpg',         label: 'White Pearl 3×6' },
    { imageUrl: '/assets/simtile/7_viencut_gray_3x6_simtile.jpg',        label: 'Veincut Gray 3×6' },
    { imageUrl: '/assets/simtile/8_mocha_travertine_3x6_simtile.jpg',    label: 'Mocha Travertine 3×6' },
    { imageUrl: '/assets/simtile/9_frost_3x6_simtile.jpg',               label: 'Frost 3×6' },
    { imageUrl: '/assets/simtile/10_calcatta_white_3x6_simtile.jpg',     label: 'Calacatta White 3×6' },
  ];

  dimensionsItems: ColorSwatch[] = [
    { imageUrl: '/assets/dimension-simtile/10x20_Black-1030x1030.jpg', label: 'Black 10×20' },
    { imageUrl: '/assets/dimension-simtile/10x20_Gray-1030x1030.jpg',  label: 'Gray 10×20' },
    { imageUrl: '/assets/dimension-simtile/3x8_Black-1030x1030.jpg',   label: 'Black 3×8' },
    { imageUrl: '/assets/dimension-simtile/3x8_Gray-1030x1030.jpg',    label: 'Gray 3×8' },
  ];

  quoteForm = { name: '', phone: '', interest: '', budget: '', timeline: '' };
  quoteStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private http: HttpClient,
  ) {
    inject(SeoService).set({
      title: 'Showroom Kiosk',
      description: 'New Bath Expo interactive showroom kiosk.',
      canonical: '/showroom',
      noindex: true,
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      ['touchstart', 'mousemove', 'click', 'keydown', 'scroll'].forEach((evt) => {
        document.addEventListener(evt, this.activityHandler, { passive: true });
      });
    }
  }

  ngOnDestroy() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    if (isPlatformBrowser(this.platformId)) {
      ['touchstart', 'mousemove', 'click', 'keydown', 'scroll'].forEach((evt) => {
        document.removeEventListener(evt, this.activityHandler);
      });
    }
  }

  tapToExplore() {
    this.idleVisible.set(false);
    this.resetIdleTimer();
  }

  navTo(v: KioskView, pv: ProductView = 'menu') {
    this.view.set(v);
    this.productView.set(pv);
    this.gallerySelected.set(null);
  }

  navToProduct(pv: ProductView) {
    this.productView.set(pv);
    this.gallerySelected.set(null);
  }

  goBack() {
    const pv = this.productView();
    switch (this.view()) {
      case 'gallery':
      case 'forms':
        this.view.set('home');
        break;
      case 'products':
        if (pv === 'menu') {
          this.view.set('home');
        } else if (pv === 'colors-stone' || pv === 'colors-simtile' || pv === 'colors-dimensions') {
          this.productView.set('colors-menu');
        } else {
          this.productView.set('menu');
        }
        break;
    }
  }

  selectGalleryImage(item: GalleryItem) {
    this.gallerySelected.set(item);
  }

  closeGalleryDetail() {
    this.gallerySelected.set(null);
  }

  zoomItem(imageUrl: string, label: string) {
    this.zoomedItem.set({ imageUrl, label });
  }

  closeZoom() {
    this.zoomedItem.set(null);
  }

  toggleFab() {
    this.fabOpen.update(v => !v);
  }

  closeFab() {
    this.fabOpen.set(false);
  }

  openQuote(interest?: string) {
    if (interest) this.quoteForm.interest = interest;
    this.fabOpen.set(false);
    this.quoteOpen.set(true);
  }

  openForm(section: 'booking' | 'design') {
    this.fabOpen.set(false);
    this.navTo('forms');
    // scroll to the correct section after view renders
    setTimeout(() => {
      const id = section === 'booking' ? 'kiosk-booking' : 'kiosk-design';
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  closeQuote() {
    this.quoteOpen.set(false);
    this.fabOpen.set(false);
    this.quoteStatus = 'idle';
  }

  resetToStart() {
    this.idleVisible.set(true);
    this.view.set('home');
    this.productView.set('menu');
    this.gallerySelected.set(null);
    this.quoteOpen.set(false);
    this.fabOpen.set(false);
    this.quoteStatus = 'idle';
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = null;
  }

  private resetIdleTimer() {
    if (this.idleVisible()) return;
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.idleVisible.set(true);
      this.view.set('home');
      this.productView.set('menu');
      this.gallerySelected.set(null);
      this.quoteOpen.set(false);
    }, this.IDLE_MS);
  }

  onQuoteSubmit(formRef: NgForm) {
    if (this.quoteStatus === 'loading') return;
    this.quoteStatus = 'loading';

    const interestLabels: Record<string, string> = {
      walls: 'Shower Wall Systems',
      'tub-to-shower': 'Tub-to-Shower Conversion',
      floors: 'Shower Floors & Bases',
      colors: 'Colors & Trim',
      'full-remodel': 'Full Bathroom Remodel',
    };

    const payload = {
      firstName: this.quoteForm.name,
      phone: this.quoteForm.phone,
      serviceType: interestLabels[this.quoteForm.interest] ?? this.quoteForm.interest,
      projectDetails: [
        this.quoteForm.budget   ? `Budget: ${this.quoteForm.budget}`   : '',
        this.quoteForm.timeline ? `Timeline: ${this.quoteForm.timeline}` : '',
        'Source: Showroom Kiosk',
      ].filter(Boolean).join(' | '),
    };

    this.http.post('/api/v1/contact', payload).subscribe({
      next: () => {
        this.quoteStatus = 'success';
        setTimeout(() => {
          this.quoteStatus = 'idle';
          formRef.resetForm();
          this.quoteForm = { name: '', phone: '', interest: '', budget: '', timeline: '' };
          this.closeQuote();
        }, 4000);
      },
      error: () => { this.quoteStatus = 'error'; },
    });
  }
}
