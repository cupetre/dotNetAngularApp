import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iproperty } from '../model/iproperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HousingService {

  private storageKey = 'properties';

  constructor(private http: HttpClient) {

  }

  getAllProperties(sellRent: number): Observable<Iproperty[]> {
    const stored = localStorage.getItem(this.storageKey);
    const localProps: Iproperty[] = stored ? JSON.parse(stored) : [];

    return this.http.get<Iproperty[]>('/properties.json').pipe(
      map(jsonProps => {
        const all = [...jsonProps, ...localProps];
        return all.filter(p => p.SellRent === sellRent);
      })
    );
  }

  addProperty(property: Iproperty) {
    const stored = localStorage.getItem(this.storageKey);
    const properties = stored ? JSON.parse(stored) : [];

    property.id = Date.now();
    properties.push(property);

    localStorage.setItem(this.storageKey, JSON.stringify(properties));
  }

  getPropertyById(id: number): Observable<Iproperty | undefined> {
  const stored = localStorage.getItem(this.storageKey);
  const localProps: Iproperty[] = stored ? JSON.parse(stored) : [];

  return this.http.get<Iproperty[]>('/properties.json').pipe(
    map(jsonProps => {
      const all = [...jsonProps, ...localProps];
      return all.find(p => p.id === id);
    })
  );
}

}
