import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  templateUrl: './page-hero.html',
  styleUrls: ['./page-hero.scss']
})
export class PageHero {
  @Input({ required: true }) bgImage!: string;
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
}
