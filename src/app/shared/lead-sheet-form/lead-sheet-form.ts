import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lead-sheet-form',
  imports: [FormsModule],
  templateUrl: './lead-sheet-form.html',
  styleUrl: './lead-sheet-form.scss',
})
export class LeadSheetForm {
  @Input() publicMode = false;
  readonly pleasantonPhone = '';

  form = {
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',

    work: {
      fullRemodel: false,
      partialRemodel: false,
      tubToShower: false,
      vanity: false,
      walkInTub: false,
      newFloorToilet: false,
      bidetSeatPaint: false,
      expandBathroom: false,
      grabBars: false,
    },
    estimatorNotes: '',

    yearsOwned: '',
    remodelTimeline: '',
    estimatesReceived: '',

    internalDate: new Date().toISOString().split('T')[0],
    setBy: '',
    estimateDate: '',
    day: '',
    timeSet: '',
  };

  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  private readonly workLabels: Record<string, string> = {
    fullRemodel: 'Full Remodel',
    partialRemodel: 'Partial Remodel',
    tubToShower: 'Tub-to-Shower Conversion',
    vanity: 'Vanity, Vanity-Top',
    walkInTub: 'Walk-in Tub, Free-Standing Tub',
    newFloorToilet: 'New Floor, Toilet',
    bidetSeatPaint: 'Bidet-Seat, New Paint',
    expandBathroom: 'Expand Bathroom',
    grabBars: 'Grab Bars',
  };

  constructor(private http: HttpClient) {}

  private getSelectedWork(): string[] {
    return (Object.keys(this.form.work) as Array<keyof typeof this.form.work>)
      .filter(key => this.form.work[key])
      .map(key => this.workLabels[key]);
  }

  onSubmit(formRef: NgForm) {
    if (this.status === 'loading') return;
    this.status = 'loading';

    const payload = {
      fullName: this.form.fullName,
      phone: this.form.phone,
      email: this.form.email,
      address: this.form.address,
      city: this.form.city,
      zip: this.form.zip,
      workItems: this.getSelectedWork(),
      estimatorNotes: this.form.estimatorNotes,
      yearsOwned: this.form.yearsOwned,
      remodelTimeline: this.form.remodelTimeline,
      estimatesReceived: this.form.estimatesReceived,
      internalDate: this.form.internalDate,
      setBy: this.form.setBy,
      estimateDate: this.form.estimateDate,
      day: this.form.day,
      timeSet: this.form.timeSet,
    };

    this.http.post('/api/v1/lead-sheet', payload).subscribe({
      next: () => {
        this.status = 'success';
        formRef.resetForm();
        this.form = {
          fullName: '', phone: '', email: '',
          address: '', city: '', zip: '',
          work: {
            fullRemodel: false, partialRemodel: false, tubToShower: false,
            vanity: false, walkInTub: false, newFloorToilet: false,
            bidetSeatPaint: false, expandBathroom: false, grabBars: false,
          },
          estimatorNotes: '',
          yearsOwned: '', remodelTimeline: '', estimatesReceived: '',
          internalDate: new Date().toISOString().split('T')[0], setBy: '', estimateDate: '', day: '', timeSet: '',
        };
        setTimeout(() => { this.status = 'idle'; }, 4000);
      },
      error: () => { this.status = 'error'; },
    });
  }
}
