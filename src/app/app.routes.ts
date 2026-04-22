import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Bookings } from './pages/bookings/bookings';
import { Gallery } from './pages/gallery/gallery';
import { Products } from './pages/products/products';
import { ShowerWallSystems } from './pages/products/shower-wall-systems/shower-wall-systems';
import { ShowerFloorsAndBases } from './pages/products/shower-floors-and-bases/shower-floors-and-bases';
import { ShowerAccessories } from './pages/products/shower-accessories/shower-accessories';
import { ColorsAndTrim } from './pages/products/colors-and-trim/colors-and-trim';
import { StoneColors } from './pages/products/colors-and-trim/stone-colors/stone-colors';
import { Simtile } from './pages/products/colors-and-trim/simtile/simtile';
import { DimensionsSimtile } from './pages/products/colors-and-trim/dimensions-simtile/dimensions-simtile';
import { Showroom } from './pages/showroom/showroom';
import { DesignRequest } from './pages/design-request/design-request';
import { BookNow } from './pages/book-now/book-now';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'New Bath Expo' },
  { path: 'products', component: Products, title: 'Products | New Bath Expo' },
  { path: 'products/shower-wall-systems', component: ShowerWallSystems, title: 'Shower Wall Systems | New Bath Expo' },
  { path: 'products/shower-floors-and-bases', component: ShowerFloorsAndBases, title: 'Shower Floors & Bases | New Bath Expo' },
  { path: 'products/shower-accessories', component: ShowerAccessories, title: 'Shower Accessories | New Bath Expo' },
  { path: 'products/colors-and-trim', component: ColorsAndTrim, title: 'Colors & Trim | New Bath Expo' },
  { path: 'products/colors-and-trim/stone-colors', component: StoneColors, title: 'Stone Colors | New Bath Expo' },
  { path: 'products/colors-and-trim/simtile', component: Simtile, title: 'SimTile | New Bath Expo' },
  { path: 'products/colors-and-trim/dimensions-simtile', component: DimensionsSimtile, title: 'Dimensions SimTile | New Bath Expo' },
  { path: 'gallery', component: Gallery, title: 'Gallery Design | New Bath Expo' },
  { path: 'book-now', component: BookNow, title: 'Book Now | New Bath Expo' },
  { path: 'bookings', component: Bookings, title: 'Bookings | New Bath Expo' },
  { path: 'design-request', component: DesignRequest, title: 'Design Request | New Bath Expo' },
  { path: 'showroom', component: Showroom, title: 'Showroom Kiosk | New Bath Expo' },
  { path: '**', component: NotFound, title: '404 | New Bath Expo' },
];
