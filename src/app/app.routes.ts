import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Bookings } from './pages/bookings/bookings';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gallery', component: Gallery },
  { path: 'bookings', component: Bookings },
];
