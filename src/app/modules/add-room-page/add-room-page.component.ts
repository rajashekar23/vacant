import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, timeout } from 'rxjs';
import { AddRoom } from 'src/app/entities/addRoom';
import { AddRoomService } from 'src/app/shared/services/add-room.service';

@Component({
  selector: 'app-add-room-page',
  templateUrl: './add-room-page.component.html',
  styleUrls: ['./add-room-page.component.css']
})
export class AddRoomPageComponent implements OnInit {
  rooms = ["Single", "1BHK", "2BHK", "3BHK"];
  tenants = ["Family", "Bachelor"];
  isImage: boolean = false;
  addRoom: AddRoom;

  constructor(private roomService: AddRoomService, private _snackBar: MatSnackBar, private route: Router) {
    this.addRoom = new AddRoom();
  }

  ngOnInit(): void {
  }

  saveRoom() {
    this.roomService.saveRoomDetails(this.addRoom).subscribe(result => {
      console.log(result);
      if (result) {
        this._snackBar.open('Room Saved SuccessFully!');
        setTimeout(() => {
          this.route.navigateByUrl('/home');
        }, 1000);
      }
    })
  }

  getImage(event: any) {
    if (event.length > 0) {
      this.isImage = true;
    }
    this.addRoom.imgURL = event;
    console.log(event)
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }



}
