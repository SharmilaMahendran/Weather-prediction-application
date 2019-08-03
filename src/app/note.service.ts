import { Injectable } from '@angular/core';
import { Weather } from './note';
import { WEATHER } from './note-stock';

@Injectable()
export class WeatherService {
  private NoteStock : Weather[] = WEATHER ;
  constructor() { }

  getNote(cityName : String):Weather{
      for(var i=0;i<this.NoteStock.length;i++)
      {
          //console.log(this.NoteStock[i]);
          if(this.NoteStock[i].cityName == cityName)
            return this.NoteStock[i];
      }
    }
}
