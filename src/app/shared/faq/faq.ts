import { Component, Input, OnInit, signal, inject } from '@angular/core';
import { FaqService, FaqData } from '../../service/faq.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq implements OnInit {
  @Input() page!: string;

  private faqService = inject(FaqService);

  faqData: FaqData | null = null;
  openIndex = signal<number | null>(0);

  ngOnInit() {
    this.faqData = this.faqService.get(this.page);
  }

  toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
