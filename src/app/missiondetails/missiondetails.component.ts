import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SpacexapiService } from '../network/spacexapi.service';



@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: any;
  constructor(
    private dataService: SpacexapiService,
    public dialogRef: MatDialogRef<MissiondetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.dataService.getMissionDetails(this.data.flight_number).subscribe((missionDetails) => {
      this.mission = missionDetails;
    });
  }
}
