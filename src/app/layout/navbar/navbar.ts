import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = signal(false);

  navLinks = [
    { path: '/', label: './home', exact: true },
    { path: '/about', label: './about', exact: false },
    { path: '/projects', label: './projects', exact: false },
    { path: '/skills', label: './skills', exact: false },
    { path: '/contact', label: './contact', exact: false },
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
