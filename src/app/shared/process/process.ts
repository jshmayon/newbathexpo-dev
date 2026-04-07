import { Component, inject } from '@angular/core';
import { ContentService } from '../../service/content';

@Component({
  selector: 'app-process',
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  private contentService = inject(ContentService);
  steps = this.contentService.steps;
}
