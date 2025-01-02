import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  validSubmit: boolean = false;
  isSubmitted: boolean = false;


  constructor(private http: HttpClient) {}
  
  setValid(form: NgForm) {
    if (form.valid) {
      this.validSubmit = true;
    };
  }

  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    this.setValid(form);
    console.log(form.value);
    this.http.post('/api/progress', {
      progressDetail: form.value,
      status: 'submitted'})
  }

  onSave(form: NgForm) {
    this.isSubmitted = true;
    this.setValid(form);
    console.log(form.value)
    this.http.post('/api/progress', {
      progressDetail: form.value,
      status: 'draft'})
  }
}
