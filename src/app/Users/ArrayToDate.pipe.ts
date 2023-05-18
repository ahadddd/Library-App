import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToDate'
})
export class ArrayToDatePipe implements PipeTransform {
  transform(array: any[]): string {
    if (!Array.isArray(array)) {
      return '';
    }

    return array.map(element => `${element.issuedOn.toString().slice(0, 15)}`).join(', ');
  }
}
// `${element.issuedOn.toString().slice(0, 15)}`