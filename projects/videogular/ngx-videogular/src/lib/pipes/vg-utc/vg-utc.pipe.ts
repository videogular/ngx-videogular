import {Pipe, PipeTransform} from '@angular/core';

// Workaround until we can use UTC with Angular Date Pipe
@Pipe({ name: 'vgUtc' })
export class VgUtcPipe implements PipeTransform {
  transform(value: number, format: string): string {
    const date = new Date(value);
    let result = format;
    let ss: string | number = date.getUTCSeconds();
    let mm: string | number = date.getUTCMinutes();
    let hh: string | number = date.getUTCHours();

    if (ss < 10) {
      ss = '0' + ss;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (hh < 10) {
      hh = '0' + hh;
    }

    result = result.replace(/ss/g, ss as string);
    result = result.replace(/mm/g, mm as string);
    result = result.replace(/hh/g, hh as string);

    return result;
  }
}
