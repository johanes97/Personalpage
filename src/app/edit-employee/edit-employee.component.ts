import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private employee:EmployeeService) { }
  employeeData:any=[];
  message: boolean = false;
  ngOnInit(): void {
    this.employee.getAllEmployee().subscribe((allData)=>{
      this.employeeData=allData;
    });
  }

  deleteEmployee(employee_id: any){
    this.employee.deleteEmployeeData(employee_id).subscribe((result)=>{
      console.log(result);
      this.ngOnInit();
      this.message = true;
    })
  }

  removeMessage(){
    this.message = false;
  }
} 
