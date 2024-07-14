import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import {
  Router,
  RouterLinkActive,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { CommonutilityService } from './utility/commonutility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'product-listing';
  isLoggedin = signal(false);

  constructor(
    private router: Router,
    public commonutilityService: CommonutilityService
  ) {}
  ngOnInit(): void {
    this.commonutilityService.checkIfLoggedIn();
  }
  navigateToLogout() {
    this.commonutilityService.logUserOut();
    this.router.navigate(['/login']);
  }
}
