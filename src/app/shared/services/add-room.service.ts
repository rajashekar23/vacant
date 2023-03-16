import { Injectable } from '@angular/core';
import { AddRoom } from 'src/app/entities/addRoom';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AddRoomService {
  RoomsList: AddRoom[] = [];
  api = 'room.json';
  constructor(private httpService: HttpService) { }
  fetchRoomDetails() {
    return this.httpService.get(`${this.api}`).toPromise();
  }

  saveRoomDetails(roomData: AddRoom) {
    return this.httpService.post(`${this.api}`, JSON.stringify(roomData)).toPromise();
  }
}
