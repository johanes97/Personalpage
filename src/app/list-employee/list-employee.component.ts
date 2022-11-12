import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employee:EmployeeService) { }
  employeeData:any=[];
  name:any;
  ngOnInit(): void {
    this.employee.getAllEmployee().subscribe((allData)=>{
      console.log( allData );
      this.employeeData=allData;
    });
  }
}
