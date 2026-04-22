import { Component, OnInit, OnDestroy, ViewChild, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Services } from '../../shared/services/services';
import { Process } from '../../shared/process/process';
import { Pricing } from '../../shared/pricing/pricing';
import { About } from '../../shared/about/about';
import { Portfolio } from '../../shared/portfolio/portfolio';
import { Testimonials } from '../../shared/testimonials/testimonials';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Process, Pricing, About, Portfolio, Testimonials],
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

  constructor() {
    inject(SeoService).set({
      title: 'New Bath Expo | Bathroom Remodeling on the Monterey Peninsula',
      description:
        'Transform your bathroom with New Bath Expo — premium Sentrel shower wall systems, tub-to-shower conversions, and full remodels. Serving Pacific Grove, Monterey, Carmel, and the Monterey Peninsula.',
      keywords:
        'bathroom remodeling monterey, shower wall systems, tub to shower conversion, sentrel panels, pacific grove bathroom remodel, monterey peninsula bathroom',
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
