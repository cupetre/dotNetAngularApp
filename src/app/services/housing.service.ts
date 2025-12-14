import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { iProperty } from '../iProperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  constructor(private http: HttpClient) {

  }

  getAllProperties(): Observable<iProperty[]> {
  return this.http.get<any[]>('properties.json').pipe(
    map(data => {
      const propertiesArray: Array<iProperty> = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          propertiesArray.push(data[key]);
        }
      }
      return propertiesArray;
    })
  );
}

}
