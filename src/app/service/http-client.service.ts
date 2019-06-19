import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* interfaccia*/
export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}


@Injectable({
  providedIn: 'root'
})

export class HttpClientService {


  /*Esempio
  nome: String
  httpClient:HttpClient
  attributo:classe */

  constructor( private httpClient:HttpClient ) {
   }


/* metodo */
getEmployees()
{
  return this.httpClient.get<Employee[]>('http://localhost:8080/employees');

}

public deleteEmployee(employee) 
{
  return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId);

}

public createEmployee(employee) {
  return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);

}
}