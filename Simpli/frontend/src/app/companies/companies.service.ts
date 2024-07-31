import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_companies`);
  }

  addCompany(name: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('name', name);
    return this.http.post(`${this.apiUrl}/add_company`, formData);
  }
}
