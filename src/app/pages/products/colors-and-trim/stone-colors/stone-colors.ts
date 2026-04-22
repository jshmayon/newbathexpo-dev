import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../../shared/page-hero/page-hero';
import { GalleryCallout } from '../../../../shared/gallery-callout/gallery-callout';
import { ProductGallery, GalleryItem } from '../../../../shared/product-gallery/product-gallery';
import { SeoService } from '../../../../service/seo.service';

@Component({
  selector: 'app-stone-colors',
  imports: [RouterLink, PageHero, GalleryCallout, ProductGallery],
  templateUrl: './stone-colors.html',
  styleUrl: './stone-colors.scss',
})
export class StoneColors {
  stoneColors: GalleryItem[] = [
    { imageUrl: '/assets/stone_colors/1_black_mist.png', label: 'Black Mist' },
    { imageUrl: '/assets/stone_colors/2_lincoln_gold.png', label: 'Lincoln Gold' },
    { imageUrl: '/assets/stone_colors/3_alaskan_ivory.png', label: 'Alaskan Ivory' },
    { imageUrl: '/assets/stone_colors/4_azzurra_bay.png', label: 'Azzurra Bay' },
    { imageUrl: '/assets/stone_colors/5_bardiglio.png', label: 'Bardiglio' },
    { imageUrl: '/assets/stone_colors/6_botticino_cream.png', label: 'Botticino Cream' },
    { imageUrl: '/assets/stone_colors/7_calabria.png', label: 'Calabria' },
    { imageUrl: '/assets/stone_colors/8_calacatta-white.png', label: 'Calacatta White' },
    { imageUrl: '/assets/stone_colors/9_Creme_Travertine.png', label: 'Creme Travertine' },
    { imageUrl: '/assets/stone_colors/10_everest.png', label: 'Everest' },
    { imageUrl: '/assets/stone_colors/11_frost.png', label: 'Frost' },
    { imageUrl: '/assets/stone_colors/12_Golden_Beaches.jpg', label: 'Golden Beaches' },
    { imageUrl: '/assets/stone_colors/13_gray_quartz.png', label: 'Gray Quartz' },
    { imageUrl: '/assets/stone_colors/14_mocha-travertine.png', label: 'Mocha Travertine' },
    { imageUrl: '/assets/stone_colors/15_Taj_Mahal.png', label: 'Taj Mahal' },
    { imageUrl: '/assets/stone_colors/16_triton.png', label: 'Triton' },
    { imageUrl: '/assets/stone_colors/17_veincut-grey.png', label: 'Veincut Grey' },
    { imageUrl: '/assets/stone_colors/18_white-pearl.png', label: 'White Pearl' },
  ];

  constructor() {
    inject(SeoService).set({
      title: 'Stone Colors | Colors & Trim',
      description:
        'Browse our full range of low-maintenance stone color shower wall panels — from Black Mist to Golden Beaches. Authentic stone looks with easy care.',
      keywords:
        'stone color shower panels, shower wall stone, low maintenance shower walls, new bath expo stone colors, sentrel stone',
      canonical: '/products/colors-and-trim/stone-colors',
      ogImage: 'https://www.newbathexpo.com/assets/baths/10.jpg',
    });
  }
}
