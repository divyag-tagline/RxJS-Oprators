import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './exhaust-map/exhaust-map.component';
import { Search } from './switch-map/switch-map.component';

@Injectable({
  providedIn: 'root',
})
export class SwitchMapService {
  constructor(private http: HttpClient) {}

  getSerches(searchTerm:any): Observable<Search> {
    return this.http.get<Search>(`${environment.config}?q=${searchTerm}`);
  }

  addUser(userDetails: User): Observable<User> {
    return this.http.post<User>(`${environment.baseURL}/users`, userDetails);
  }

  displyUser():Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseURL}/users`);
  }


  deleteUser(index: number): Observable<any> {
    return this.http.delete(`${environment.baseURL}/users/${index}`);
  }

  editUser(data: any, index: number): Observable<any> {
    return this.http.put(`${environment.baseURL}/users/${index}`, data);
  }

  patchUser(data: any, index: number): Observable<any> {
    return this.http.patch(`${environment.baseURL}/users/${index}`, data);
  }

  getDataPromise(): Promise<any>{
    return this.http.get(`${environment.baseURL}/users`).toPromise().then((res:any) => {
      return Promise.resolve(res)
    } )
  }

  displyProducts():Observable<any> {
    return this.http.get(`${environment.apiConfig}`);
  }
  getProducts():Observable<any> {
    return this.http.get(`${environment.api}`);
  }
}
