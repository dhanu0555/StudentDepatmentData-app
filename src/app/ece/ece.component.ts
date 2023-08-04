import { Component } from '@angular/core';

@Component({
  selector: 'app-ece',
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.css']
})
export class ECEComponent  {
  records: any[] = [
    { name: 'eceJohn Doe', age: 20, bloodGroup: 'O+', department: 'EEE' },
    { name: 'dicaprio', age: 60, bloodGroup: 'O+', department: 'EEE' },
    // Add more records
  ];
  selectedRecord: any = null;

  viewRecord(record: any) {
    this.selectedRecord = record;
  }
}