import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_tasks`);
  }

  addEmployee(nombre: string, rut: string, email: string, empresa: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('rut', rut);
    formData.append('email', email);
    formData.append('empresa', empresa);
    return this.http.post(`${this.apiUrl}/add_task`, formData);
  }
}
