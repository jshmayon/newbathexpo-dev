import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../../shared/page-hero/page-hero';
import { GalleryCallout } from '../../../../shared/gallery-callout/gallery-callout';
import { ProductGallery, GalleryItem } from '../../../../shared/product-gallery/product-gallery';
import { SeoService } from '../../../../service/seo.service';

@Component({
  selector: 'app-dimensions-simtile',
  imports: [RouterLink, PageHero, GalleryCallout, ProductGallery],
  templateUrl: './dimensions-simtile.html',
  styleUrl: './dimensions-simtile.scss',
})
export class DimensionsSimtile {
  galleryItems: GalleryItem[] = [
    { imageUrl: '/assets/dimension-simtile/10x20_Black-1030x1030.jpg', label: 'Black 10×20' },
    { imageUrl: '/assets/dimension-simtile/10x20_Gray-1030x1030.jpg', label: 'Gray 10×20' },
    { imageUrl: '/assets/dimension-simtile/3x8_Black-1030x1030.jpg', label: 'Black 3×8' },
    { imageUrl: '/assets/dimension-simtile/3x8_Gray-1030x1030.jpg', label: 'Gray 3×8' },
  ];

  constructor() {
    inject(SeoService).set({
      title: 'Dimensions SimTile | Colors & Trim',
      description:
        'Explore Dimensions SimTile shower panels — large-format tile aesthetics with zero grout maintenance. Premium depth and texture for a modern bathroom.',
      keywords:
        'dimensions simtile, large tile shower panels, groutless shower walls, new bath expo dimensions simtile',
      canonical: '/products/colors-and-trim/dimensions-simtile',
      ogImage: 'https://www.newbathexpo.com/assets/shower_colors/Dimensions_SimTile_10x20_Gray-scaled-edit.png',
    });
  }
}
