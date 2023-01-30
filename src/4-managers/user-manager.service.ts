import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// This Service should be an interface to your auth service to isolate it from the rest of the app
@Injectable({
  providedIn: 'root'
})
export class UserManager {
  private readonly userLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly userLoadedObs: Observable<boolean> = this.userLoaded$.asObservable();

  constructor() { }

  public login(): void {
    // call auth service logout
    this.userLoaded$.next(true);
  }

  public logout(): void {
    // call auth service logout
  }
}
