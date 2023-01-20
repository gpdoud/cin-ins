import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor/vendor.class';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(vendors: any[], sortColumn: string, sortAsc: boolean = true): any {

    const sortFn = (v1: any, v2: any): number => {
      let va = v1[sortColumn].toLowerCase();
      let vb = v2[sortColumn].toLowerCase();
      if(va === vb) return 0;
      if(sortAsc) {
        return (va > vb) ? 1 : -1;
      } else {
        return (va > vb) ? -1 : 1;
      }
    }

    return vendors.sort(sortFn);
    
  }

}
