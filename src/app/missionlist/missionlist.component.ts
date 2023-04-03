import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../model/mission';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  @Output() missionSelected = new EventEmitter<any>();
  selectedMission: any = null;
  missions: Mission[] = [];
  years: string[] = [];
  checkedYears: {[key: string]: boolean} = {};
  

  constructor(private spacexService: SpacexapiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMissions();
    this.getMissionYears();
  }
  
  getMissionYears(): void {
    this.spacexService.getMissions().subscribe((data: Mission[]) => {
      const years = new Set<string>();
      data.forEach(mission => years.add(mission.launch_year));
      this.years = Array.from(years).sort().reverse();
      this.years.forEach(year => this.checkedYears[year] = false);
    });
  }
  

  getMissions(): void {
    const selectedYears = Object.keys(this.checkedYears).filter(year => this.checkedYears[year]);
    this.spacexService.getMissions(selectedYears).subscribe((data: Mission[]) => {
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
