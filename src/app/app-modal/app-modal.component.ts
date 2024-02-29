import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl:'./app-modal.component.html',
  styleUrls: ['./app-modal.component.less'],
})
export class AppModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() customContent: any; 

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
