import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../note.service';
import { Weather } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private currentCityNote : Weather;
  private pastCityNote : Weather[] =[];
  constructor(private noteservice : WeatherService ) { }

  ngOnInit() {
  }
getNote(CityName : string ):void{
    this.currentCityNote = this.noteservice.getNote(CityName);

    // Adding to past results
    this.currentCityNote.searchTime = (new Date()).toTimeString();
    this.pastCityNote.push(this.currentCityNote);
  }

}
