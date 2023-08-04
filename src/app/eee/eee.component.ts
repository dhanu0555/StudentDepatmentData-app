import { Component } from '@angular/core';

@Component({
  selector: 'app-eee',
  templateUrl: './eee.component.html',
  styleUrls: ['./eee.component.css']
})
export class EEEComponent  {
  records: any[] = [
    { name: 'eeeJohn Doe', age: 20, bloodGroup: 'O+', department: 'EEE' },
    { name: 'miller', age: 30, bloodGroup: 'O+', department: 'EEE' },
    // Add more records
  ];
  selectedRecord: any = null;

  viewRecord(record: any) {
    this.selectedRecord = record;
  }
}