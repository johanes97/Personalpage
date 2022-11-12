import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url='http://localhost:3005/employees';
  constructor(private http:HttpClient) { }
  getAllEmployee(){
    return this.http.get( this.url );
  }
  saveEmployeeData(data:any){
    console.log(data);
    return this.http.post(this.url,data);
  }

  deleteEmployeeData(id:any){
    console.log(id);
    return this.http.delete(`${this.url}/${id}`);
  }

  getEmployeeById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  updateEmployeeData(id:number,data:any){
    console.log(id);
    return this.http.put(`${this.url}/${id}`,data);
  }

  getEmployeeByName(name:any){
    return this.http.get(`${this.url}?name=${name}`);
  }
}
