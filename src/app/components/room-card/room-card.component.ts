import { Component, Input, OnInit } from '@angular/core';
import { AddRoom } from 'src/app/entities/addRoom';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  @Input() roomDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
