import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private employee:EmployeeService) { }

  searchEmployee = new FormGroup({
    name: new FormControl( '' )
  });

  ngOnInit(): void {
  }
  employeeData:any=[];
  SearchData(){
    this.employee.getEmployeeByName(this.searchEmployee.value.name).subscribe((empData)=>
      {
        console.log( empData );
        this.employeeData=empData;
      }
    );
  }
}
