import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent {
  constructor(private http: HttpClient, private dataService: DataService) {}

  messageFromParent = 'Hello from Parent!';

  data: Object[] = [];
  // ouput
  messageFromChild: string = '';

  receiveMessage(message: any) {
    this.messageFromChild = message;
  }

  getData() {
    this.dataService
      .getData()
      .pipe(
        tap({
          next: (res)=>{
            this.data = res;
          },
          error: (err)=>{
            console.log('Error occured: '+ err)
          }
        })
      )
      .subscribe();
  }
}