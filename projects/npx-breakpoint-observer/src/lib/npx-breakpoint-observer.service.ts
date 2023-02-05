import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  shareReplay,
  startWith,
} from 'rxjs/operators';

const QUERY: Map<string, string> = new Map([
  ['xxl', '(min-width: 1440px)'],
  ['xl', '(min-width: 1200px)'],
  ['lg', '(min-width: 992px)'],
  ['md', '(min-width: 768px)'],
  ['sm', '(min-width: 576px)'],
  ['xs', '(min-width: 0px)'],
]);
@Injectable({
  providedIn: 'root',
})
export class NpxBreakpointObserverService {
  private readonly _size$: Observable<string>;
  static readonly mobileSizes = ['md', 'sm', 'xs'];
  static readonly tabletSizes = ['md'];
  static readonly desktopSizes = ['lg', 'xl'];

  constructor() {
    this._size$ = fromEvent(window, 'resize').pipe(
      startWith<any>(this._getScreenSize()),
      map((event: Event) => this._getScreenSize()),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }

  /**
   * Method to get the current size of the screen.
   * @returns Observable<string>.
   */
  getSize(): Observable<string> {
    return this._size$;
  }

  /**
   * Method to know if the current view is "mobile".
   * @returns Observable<boolean>.
   */
  isMobile(): Observable<boolean> {
    return this._size$.pipe(
      map((size) => NpxBreakpointObserverService.mobileSizes.includes(size)),
      distinctUntilChanged()
    );
  }

  /**
   * Method to know if the current view is "desktop".
   * @returns Observable<boolean>.
   */
  isDesktop(): Observable<boolean> {
    return this._size$.pipe(
      map((size) => NpxBreakpointObserverService.desktopSizes.includes(size)),
      distinctUntilChanged()
    );
  }

  /**
   * Method to know what "size" the view is right now.
   * @returns string.
   */
  private _getScreenSize(): string {
    const [[newSize = 'never']] = Array.from(QUERY.entries()).filter(
      ([size, mediaQuery]) => window.matchMedia(mediaQuery).matches
    );
    return newSize;
  }
}
