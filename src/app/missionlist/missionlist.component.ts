import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  missions: any[] = [];
  year: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    let url = 'https://api.spacexdata.com/v3/launches';
    if (this.year) {
      url += '?launch_year=' + this.year;
    }
    this.http.get(url).subscribe((data: any) => {
      this.missions = data;
    });
  }

  filterMissions(): void {
    this.getMissions();
  }

  
}
