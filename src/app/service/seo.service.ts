import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;        // e.g. '/' or '/products/shower-wall-systems'
  ogImage?: string;         // absolute URL
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private titleSvc = inject(Title);
  private doc = inject(DOCUMENT);

  private readonly BASE_URL = 'https://www.newbathexpo.com';
  private readonly SITE_NAME = 'New Bath Expo';
  private readonly DEFAULT_IMAGE = `${this.BASE_URL}/assets/baths/1.jpg`;

  set(data: SeoData) {
    const fullTitle = data.title.includes(this.SITE_NAME)
      ? data.title
      : `${data.title} | ${this.SITE_NAME}`;
    const canonicalUrl = `${this.BASE_URL}${data.canonical}`;
    const image = data.ogImage ?? this.DEFAULT_IMAGE;
    const robots = data.noindex ? 'noindex,nofollow' : 'index,follow';

    this.titleSvc.setTitle(fullTitle);

    // Standard
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'robots', content: robots });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.SITE_NAME });

    // Twitter / X
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Canonical link element
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }
}
