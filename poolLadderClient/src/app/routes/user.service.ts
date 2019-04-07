import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map, tap } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {  }

  getUsers(): Observable<User[]> {

    return this.http.get<any>('http://localhost:8081/api' + '/users')
      .pipe(
        map(result => result)
      );
  }
}
