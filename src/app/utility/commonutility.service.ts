import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonutilityService {
  loggedin = signal(false);
  constructor() {}

  checkIfLoggedIn() {
    const isLoggedin = localStorage.getItem('isLoggedin');
    if (isLoggedin == 'true') {
      this.loggedin.set(true);
    }
  }

  logUserIn() {
    localStorage.setItem('isLoggedin', 'true');
    this.loggedin.set(true);
  }

  logUserOut() {
    localStorage.setItem('isLoggedin', 'false');
    this.loggedin.set(false);
  }
}
