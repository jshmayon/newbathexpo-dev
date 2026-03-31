import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Bookings } from './pages/bookings/bookings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'bookings', component: Bookings },
];
