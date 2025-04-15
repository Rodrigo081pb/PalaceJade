import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [LogoComponent, NgClass, CommonModule]
})
export class NavbarComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
