import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalStateSubject = new BehaviorSubject<boolean>(false);

  get modalState$(): Observable<boolean> {
    return this.modalStateSubject.asObservable();
  }

  openModal(): void {
    this.modalStateSubject.next(true);
  }

  closeModal(): void {
    this.modalStateSubject.next(false);
  }
}
