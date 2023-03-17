import { Component, OnInit } from '@angular/core';
import { AddRoom } from 'src/app/entities/addRoom';
import { AddRoomService } from 'src/app/shared/services/add-room.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  roomsList: AddRoom[] = []
  constructor(private roomService: AddRoomService) { }

  ngOnInit(): void {

    this.getRoomsDetails()

  }

  getRoomsDetails() {
    this.roomService.fetchRoomDetails()
      .subscribe((data) => {
        console.log(Object.values(data));
        this.roomsList = Object.values(data);
      });
    // .catch((error) => {
    //   console.log("Promise rejected with " + JSON.stringify(error));
    // });
  }

}
