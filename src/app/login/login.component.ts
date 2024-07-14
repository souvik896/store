import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonutilityService } from '../utility/commonutility.service';
@Component({
  selector: 'app-login',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public addFormGroup: FormGroup;
  localStrgData: any = null;
  errormsg = '';
  /**
   * Constructor for initializing the LoginComponent.
   *
   * @param {Router} router - The router service for navigation.
   * @param {CommonutilityService} commonutilityService - The service for common utility functions.
   */
  constructor(
    private router: Router,
    private commonutilityService: CommonutilityService
  ) {
    this.addFormGroup = new FormGroup({
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
  ngOnInit(): void {
    this.localStrgData = JSON.parse(localStorage.getItem('data'));
    console.log(this.localStrgData, '*******************');
  }
  saveData() {
    if (this.localStrgData && Object.keys(this.localStrgData).length > 0) {
      if (
        this.localStrgData?.email === this.addFormGroup.value.email &&
        this.localStrgData?.password === this.addFormGroup.value.password
      ) {
        this.router.navigate(['/profile']);
        this.addFormGroup.reset();
        this.commonutilityService.logUserIn();
      } else {
        this.errormsg = 'invalid user or credential';
      }
    } else {
      this.errormsg = 'invalid user or credential';
    }
    setTimeout(() => {
      this.errormsg = '';
    }, 3000);
  }
  navigateToReg() {
    this.router.navigate(['/register']);
  }
}
