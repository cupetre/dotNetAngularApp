import { Pipe, PipeTransform } from '@angular/core';
import { Iproperty } from '../model/iproperty';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(
    properties: Iproperty[],
    sortField: string,
    sortDirection:string
  ): Iproperty[] {
    
      if ( !sortField ) return properties;

      let multiplier = 1;

      if ( sortDirection === 'desc' ) {
        multiplier = -1;
      }

      return properties.sort((a: any, b: any) => {
          if ( a[sortField] < b[sortField] ) {
            return -1 * multiplier;
          } else if ( a[sortField] > b[sortField] ) {
            return 1 * multiplier;
          } else {
            return 0;
          }
    
    });
  
  }
}  
