import { Component, inject } from '@angular/core';
import { LeadSheetForm } from '../../shared/lead-sheet-form/lead-sheet-form';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-lead-sheet',
  standalone: true,
  imports: [LeadSheetForm],
  templateUrl: './lead-sheet.html',
  styleUrl: './lead-sheet.scss',
})
export class LeadSheet {
  constructor() {
    inject(SeoService).set({
      title: 'Lead Sheet | New Bath Expo',
      description: 'New Bath Expo lead capture form for bathroom remodeling consultations.',
      canonical: '/lead-sheet',
      noindex: true,
    });
  }
}
