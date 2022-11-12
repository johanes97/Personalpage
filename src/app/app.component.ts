import { Component } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'company-record';
  constructor(){}
}
