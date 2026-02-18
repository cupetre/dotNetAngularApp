import { Pipe, PipeTransform } from '@angular/core';
import { Iproperty } from '../model/iproperty';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    properties: Iproperty[],
    selectedType?: string,
    selectedFurnish?: string,
    selectedBHK?: number
  ): Iproperty[] {

    if ( !properties ) {
      return [];
    }

    return properties.filter( prop => {
      const typeMatch = selectedType ? prop.Type === selectedType : true;
      const furnishMatch = selectedFurnish ? prop.FurnishingType === selectedFurnish : true;
      const bhkMatch = selectedBHK ? prop.BHK === selectedBHK : true;
      return typeMatch && furnishMatch && bhkMatch ;
    });
  }

}
