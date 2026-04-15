import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-form',
  imports: [FormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss',
})
export class BookingForm {
  form = {
    firstName: '', lastName: '', email: '', phone: '',
    serviceType: '', preferredDate: '', projectDetails: ''
  };
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(private http: HttpClient) {}

  private serviceLabels: Record<string, string> = {
    'consultation': 'In-Home or Virtual Consultation',
    'tub-to-shower': 'Tub-to-Shower Remodel',
    'walk-in-tub': 'Walk-in Tub Remodel',
    'full-remodel': 'Full Bathroom Remodel',
    'others': 'Others'
  };

  onSubmit(formRef: NgForm) {
    if (this.status === 'loading') return;
    this.status = 'loading';

    const payload = {
      ...this.form,
      serviceType: this.serviceLabels[this.form.serviceType] ?? this.form.serviceType
    };

    this.http.post('/api/v1/contact', payload).subscribe({
      next: () => { 
        this.status = 'success';

        formRef.resetForm();

        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          serviceType: '',
          preferredDate: '',
          projectDetails: ''
        };

        setTimeout(() => {
          this.status = 'idle';
        }, 4000)
      },
      error: () => this.status = 'error'
    });
  }
}
