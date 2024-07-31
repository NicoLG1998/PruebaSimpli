import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies = [];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.companiesService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  addCompany(name: string) {
    this.companiesService.addCompany(name).subscribe(response => {
      console.log(response);
      this.ngOnInit(); // Refresh the list
    });
  }
}
