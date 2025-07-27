import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes this service a singleton available throughout the app
})
export class DrawerService {
  private _isOpen = new BehaviorSubject<boolean>(false);
  public isOpen$: Observable<boolean> = this._isOpen.asObservable();

  constructor() { }

  openDrawer(): void {
    this._isOpen.next(true);
  }

  closeDrawer(): void {
    this._isOpen.next(false);
  }

  toggleDrawer(): void {
    this._isOpen.next(!this._isOpen.value);
  }
}
