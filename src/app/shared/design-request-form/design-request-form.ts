import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DesignOptionsService } from '../../service/design-options.service';

@Component({
  selector: 'app-design-request-form',
  imports: [FormsModule],
  templateUrl: './design-request-form.html',
  styleUrl: './design-request-form.scss',
})
export class DesignRequestForm {
  options = inject(DesignOptionsService);

  form = {
    firstName: '', lastName: '', email: '', phone: '',
    wallDesign: '', wallDesignOther: '',
    tiles: '', tilesOther: '',
    bath: '', bathOther: '',
    sink: '', sinkOther: '',
    faucet: '', faucetOther: '',
    shower: '', showerOther: '',
    notes: ''
  };
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(private http: HttpClient) {}


  private resolve(value: string, other: string): string {
    return value === 'others' ? other || 'Others' : value;
  }

  onSubmit(formRef: NgForm) {
    if (this.status === 'loading') return;
    this.status = 'loading';

    const payload = {
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      email: this.form.email,
      phone: this.form.phone,
      wallDesign: this.resolve(this.form.wallDesign, this.form.wallDesignOther),
      tiles: this.resolve(this.form.tiles, this.form.tilesOther),
      bath: this.resolve(this.form.bath, this.form.bathOther),
      sink: this.resolve(this.form.sink, this.form.sinkOther),
      faucet: this.resolve(this.form.faucet, this.form.faucetOther),
      shower: this.resolve(this.form.shower, this.form.showerOther),
      notes: this.form.notes
    };

    this.http.post('/api/v1/design-request', payload).subscribe({
      next: () => {
        this.status = 'success';
        formRef.resetForm();
        this.form = {
          firstName: '', lastName: '', email: '', phone: '',
          wallDesign: '', wallDesignOther: '',
          tiles: '', tilesOther: '',
          bath: '', bathOther: '',
          sink: '', sinkOther: '',
          faucet: '', faucetOther: '',
          shower: '', showerOther: '',
          notes: ''
        };
        setTimeout(() => { this.status = 'idle'; }, 4000);
      },
      error: () => this.status = 'error'
    });
  }
}
