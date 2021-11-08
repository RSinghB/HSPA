import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../Property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent:number):Observable<IProperty[]> {
    return this.http.get("Data/properties.json").pipe(
      map(data => {
        const jsonData = JSON.stringify(data);
        const propertiesArray: Array<IProperty> = JSON.parse(jsonData);
        const propertiesFilterArray: Array<IProperty> = [];
        propertiesArray.forEach(e => {
          if(e.SellRent === SellRent){
            propertiesFilterArray.push(e);
          }
        });
        return propertiesFilterArray;
      })
    )
  }
}
