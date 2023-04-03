import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  @Output() missionSelected = new EventEmitter<any>();
  selectedMission: any = null;
  missions: any[] = [];
  year: string = '';

  constructor(private http: HttpClient, public dialog: MatDialog) { }

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

  selectMission(mission: any): void {
    this.missionSelected.emit(mission);
  }
  
  openMissionDetails(mission: any): void {
    this.dialog.open(MissiondetailsComponent, {
      data: mission,
      width: '800px',
    });
  }
  
}
