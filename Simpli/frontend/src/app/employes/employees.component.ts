import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(nombre: string, rut: string, email: string, empresa: string) {
    this.employeesService.addEmployee(nombre, rut, email, empresa).subscribe(response => {
      console.log(response);
      this.ngOnInit(); // Refresh the list
    });
  }
}
