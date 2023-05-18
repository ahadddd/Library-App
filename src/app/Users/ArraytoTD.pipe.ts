import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToTdElements'
})
export class ArrayToTDPipe implements PipeTransform {
  transform(array: any[]): string {
    if (!Array.isArray(array)) {
      return '';
    }

    return array.map(element => `${element.title}`).join(', ');
  }
}
