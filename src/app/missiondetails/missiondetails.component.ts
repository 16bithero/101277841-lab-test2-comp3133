import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<MissiondetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public mission: any

  ) { }
}
