import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  missions: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.http.get('https://api.spacexdata.com/v3/launches').subscribe((data: any) => {
      this.missions = data;
      console.log(this.missions);
    });
  }
}
