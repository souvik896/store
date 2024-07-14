import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public addFormGroup: FormGroup;
  constructor(private router: Router) {
    this.addFormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl('dummyuser@meil.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('12345678', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  savedata() {
    console.log(this.addFormGroup.value);
    if (Object.keys(this.addFormGroup.value).length) {
      localStorage.setItem('data', JSON.stringify(this.addFormGroup.value));
      localStorage.setItem('isLoggedin', 'false');
    }
    this.addFormGroup.reset();
    this.router.navigate(['/login']);
  }
}
