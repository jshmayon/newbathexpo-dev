import { Component, OnInit, OnDestroy, ViewChild, ElementRef, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
  import { Process } from '../../shared/process/process';
import { Pricing } from '../../shared/pricing/pricing';
import { About } from '../../shared/about/about';
import { Testimonials } from '../../shared/testimonials/testimonials';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Process, Pricing, About, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  @ViewChild('heroVideo') videoRef!: ElementRef<HTMLVideoElement>;
  private platformId = inject(PLATFORM_ID);

  slides = [
    'assets/portfolio/rustic-charm.jpg',
    'assets/portfolio/luxurious-retreat.jpg',
    'assets/portfolio/tranquil-oasis.jpg',
  ];

  activeSlide = 0;
  private interval: ReturnType<typeof setInterval> | null = null;

  selectedMarket = signal(0);

  markets = [
    {
      title: 'Remodels',
      description: 'Breathe new life into an existing bathroom. We handle everything from tear-out to tile, on time, on budget.',
      image: 'assets/baths/1.jpg',
    },
    {
      title: 'New Construction',
      description: 'Partner with builders to deliver premium bath installs on time and on spec, every single project.',
      image: 'assets/baths/2.jpg',
    },
    {
      title: 'Multi-Family',
      description: 'Scalable, consistent solutions for apartment complexes and condominiums, built for volume without sacrificing quality.',
      image: 'assets/baths/5.jpg',
    },
    {
      title: 'Hospitality',
      description: 'Durable, elegant finishes engineered for the demands of hotels and resorts where first impressions matter.',
      image: 'assets/baths/4.jpg',
    },
  ];

  constructor() {
    inject(SeoService).set({
      title: 'New Bath Expo | Bathroom Remodeling on the Monterey Peninsula',
      description:
        'Transform your bathroom with New Bath Expo, premium New Bath Expo shower wall systems, tub-to-shower conversions, and full remodels. Serving Pacific Grove, Monterey, Carmel, and the Monterey Peninsula.',
      keywords:
        'bathroom remodeling monterey, shower wall systems, tub to shower conversion, New Bath Expo panels, pacific grove bathroom remodel, monterey peninsula bathroom',
      canonical: '/',
      ogImage: 'https://www.newbathexpo.com/assets/portfolio/luxurious-retreat.jpg',
    });
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.interval = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 4000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play();
  }
}
