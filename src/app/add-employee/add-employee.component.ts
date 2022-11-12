import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employee:EmployeeService) { }
  addEmployee = new FormGroup({
    name: new FormControl( '' ),
    phone: new FormControl ( '' ),
    skill: new FormControl ( '' ),
    notes: new FormControl ( '' )
  });

  message:boolean = false;
  ngOnInit(): void {
  }

  SaveData(){
    this.employee.saveEmployeeData(this.addEmployee.value).subscribe((result)=>
      {
        console.log(result);
        this.message = true;
      }
    );
  }

  removeMessage(){
    this.message = false;
  }
}
