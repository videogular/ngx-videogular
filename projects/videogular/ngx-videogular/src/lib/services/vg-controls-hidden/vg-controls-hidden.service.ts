import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class VgControlsHiddenService {
  isHidden: Observable<boolean>;

  private isHiddenSubject: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.isHidden = this.isHiddenSubject.asObservable();
  }

  state(hidden: boolean) {
    this.isHiddenSubject.next(hidden);
  }
}
