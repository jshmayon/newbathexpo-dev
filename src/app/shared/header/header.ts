import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  scrolled = false;
  menuOpen = false;
  private platformId = inject(PLATFORM_ID);

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.updateBodyScroll();
  }

  closeMenu() {
    this.menuOpen = false;
    this.updateBodyScroll();
  }

  private updateBodyScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}
