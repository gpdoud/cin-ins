import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateCodeToName'
})
export class StateCodeToNamePipe implements PipeTransform {

  transform(code: string): string {
    switch(code.toLowerCase()) {
      case 'oh': return 'Ohio'; break;
      case 'ga': return 'Georgia'; break;
      case 'wa': return 'Washington'; break;
      case 'ny': return 'New York'; break;
      default: return "Unknown"; break;
    }
  }

}
