import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101277841-lab-test2-comp3133';
  selectedMission: any = null;

  handleMissionSelected(mission: any): void {
    this.selectedMission = mission;
  }
}
