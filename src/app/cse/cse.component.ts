import { Component } from '@angular/core';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CSEComponent  {
  records: any[] = [
    { name: 'cseJohn Doe', age: 20, bloodGroup: 'O+', department: 'EEE' },
    { name: 'sumanth', age: 80, bloodGroup: 'O+', department: 'EEE' },
    // Add more records
  ];
  selectedRecord: any = null;

  viewRecord(record: any) {
    this.selectedRecord = record;
  }
}
