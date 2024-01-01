import { Component } from '@angular/core';
import {ThemeService} from "./core/services/theme.service";
import {RouterOutlet} from "@angular/router";
import {fadeAnimation, routerTransition, slideAnimation} from "./shared/animations/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fadeAnimation, slideAnimation, routerTransition]
})
export class AppComponent {
  title = 'github-profile-search';

  constructor(private themeService: ThemeService) {}


  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
