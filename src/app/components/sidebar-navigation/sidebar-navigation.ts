import { Component, OnInit, OnDestroy, HostListener, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // For NgFor, NgIf
import { MatIconModule } from '@angular/material/icon'; // For Mat-icon
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router'; // For routing capabilities
import { filter } from 'rxjs/operators';

interface MenuItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidebar-navigation',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-navigation.html',
  styleUrl: './sidebar-navigation.scss'
})
export class SidebarNavigation implements OnInit, OnDestroy {

  isCollapsed: boolean = false;
  activeLink: string = '/dashboard'; // Default active link

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { label: 'Assets', icon: 'storage', link: '/assets' },
    { label: 'Risks', icon: 'warning', link: '/risks' },
    { label: 'Remediation', icon: 'build', link: '/remediation' },
    { label: 'Reports', icon: 'description', link: '/reports' },
    { label: 'Settings', icon: 'settings', link: '/settings' },
  ];

  private mediaQuery!: MediaQueryList; // For responsiveness
  private renderer = inject(Renderer2); // Inject Renderer2
  private router = inject(Router); // Inject Router

  ngOnInit(): void {
    // Set initial active link based on current route
    this.activeLink = this.router.url;

    // Listen to route changes to update active link
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.activeLink = event.urlAfterRedirects;
    });

    // Check screen size on init for initial collapse state
    this.checkScreenSize();

    // Listen for screen size changes for responsiveness
    // Using window.matchMedia for reactive design
    this.mediaQuery = window.matchMedia(`(max-width: ${this.getBreakpoint('md') - 1}px)`);
    this.mediaQuery.addEventListener('change', this.onMediaQueryChange);
  }

  ngOnDestroy(): void {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.onMediaQueryChange);
    }
  }

  // Handle setting active link
  setActive(link: string): void {
    this.activeLink = link;
    // On mobile, close sidebar when an item is clicked
    if (this.isMobile()) {
      this.closeSidebar();
    }
  }

  // Toggle sidebar collapse state (for desktop)
  toggleCollapse(): void {
    if (!this.isMobile()) {
      this.isCollapsed = !this.isCollapsed;
      this.adjustMainContentMargin();
    } else {
      // On mobile, this button will open/close the overlay sidebar
      if (!this.isSidebarOpenOnMobile) {
        this.openSidebar();
      } else {
        this.closeSidebar();
      }
    }
  }

  // Mobile specific sidebar state
  isSidebarOpenOnMobile: boolean = false;

  openSidebar(): void {
    this.isSidebarOpenOnMobile = true;
    this.renderer.addClass(document.body, 'sidebar-open'); // Add class to body to prevent scroll
    this.renderer.addClass(document.querySelector('.sidebar'), 'open'); // Add 'open' class to sidebar for CSS transition
  }

  closeSidebar(): void {
    this.isSidebarOpenOnMobile = false;
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.removeClass(document.querySelector('.sidebar'), 'open');
  }

  onLogout(): void {
    console.log('User logged out');
    // Implement actual logout logic here (e.g., clear session, redirect to login)
  }

  // Helper to check if current screen is mobile based on defined breakpoint
  private isMobile(): boolean {
    return window.innerWidth < this.getBreakpoint('md');
  }

  // Event listener for window resize, for a more immediate reaction than mediaQuery
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.checkScreenSize();
    this.adjustMainContentMargin();
  }

  // Event listener for media query changes (more efficient for specific breakpoints)
  private onMediaQueryChange = (event: MediaQueryListEvent) => {
    this.checkScreenSize();
    this.adjustMainContentMargin();
    // If we transition from mobile to desktop, ensure sidebar is not in overlay state
    if (!this.isMobile() && this.isSidebarOpenOnMobile) {
      this.closeSidebar();
      this.isCollapsed = false; // Reset to expanded on desktop transition
    }
  }

  // Adjusts the margin of the main content wrapper based on sidebar state
  private adjustMainContentMargin(): void {
    const mainContent = document.querySelector('.content-wrapper') as HTMLElement;
    if (mainContent) {
      if (!this.isMobile()) {
        mainContent.style.marginLeft = this.isCollapsed ? '70px' : '250px';
      } else {
        mainContent.style.marginLeft = '0'; // On mobile, sidebar overlays, no margin needed
      }
    }
  }

  // Helper to get breakpoint value from SCSS variables (approximated in JS)
  // In a real application, you might use a shared config or CSS-in-JS for this.
  private getBreakpoint(name: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'): number {
    const breakpoints = {
      'xs': 0,
      'sm': 576,
      'md': 768,
      'lg': 992,
      'xl': 1200,
      'xxl': 1400
    };
    return breakpoints[name];
  }

  private checkScreenSize(): void {
    if (this.isMobile()) {
      this.isCollapsed = true; // Always collapsed on mobile (will become overlay)
      this.closeSidebar(); // Ensure it's closed initially
    } else {
      this.isCollapsed = false; // Default to expanded on desktop
      this.closeSidebar(); // Ensure mobile overlay classes are removed
    }
  }

}
