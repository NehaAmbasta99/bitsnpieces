import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl:'./color-picker.component.html',
  styleUrl:'./color-picker.component.less'
})
export class ColorPickerComponents {
  @Output() colorChanged = new EventEmitter<string>();
  selectedColor: string = '#000000';

  onColorChange(color: string | Event) {
    if (typeof color === 'string') {
      this.selectedColor = color;
    } else if (color instanceof Event) {
      // Extract the color value from the event
      const colorValue = (color.target as HTMLInputElement).value;
      this.selectedColor = colorValue;
    }
    this.colorChanged.emit(this.selectedColor);
    
  }
}
