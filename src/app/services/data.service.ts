import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTodo(newTodo: any): Observable<any> {
   return this.http.post<any>(this.apiUrl, newTodo);
  }

  deleteTodo(todoid: any) :Observable<any>{
    return this.http.delete<any>(this.apiUrl,todoid);
  }
}