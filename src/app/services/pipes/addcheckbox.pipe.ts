import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'addCheckbox',
    pure: true
  })
export class AddCheckboxPipe implements PipeTransform{
    transform(value: any): any {
       return value ? '☑' : '☐';
    }
}