import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/service/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employee:EmployeeService, private router: ActivatedRoute) { }
  updateEmployee = new FormGroup({
    name: new FormControl( '' ),
    phone: new FormControl ( '' ),
    skill: new FormControl ( '' ),
    notes: new FormControl ( '' )
  });
  message:boolean = false;
  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id);
    this.employee.getEmployeeById(this.router.snapshot.params.id).subscribe((result:any)=>
      {
        // console.log(result);
        this.updateEmployee = new FormGroup({
          name: new FormControl( result['name'] ),
          phone: new FormControl ( result['phone'] ),
          skill: new FormControl ( result['skill'] ),
          notes: new FormControl ( result['notes'] )
        });
      }
    );
  }

  UpdateData(){
    this.employee.updateEmployeeData(this.router.snapshot.params.id, this.updateEmployee.value).
    subscribe((result:any)=>{
        console.log(result);
        this.message = true;
    });
  }

  removeMessage(){
    this.message = false;
  }
}
