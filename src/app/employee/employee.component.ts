import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employees:Employee[];

  constructor( private httpClientService:HttpClientService ) { }

  /* implemento il servizio httpClientService
   per prendere la lista dei dipendenti 
   e come risposta incremento la funzione handleSuccessfulResponse(creandola dopo) 
   che mi dara il risponso*/

  ngOnInit() {this.httpClientService.getEmployees().subscribe(
    response =>{this.employees = response;}
   );

  }
  /* funzione (deleteEmployee) che si collega di Employees 
  cancello la riga e attraverso filter faccio in modo che lasta si crei senza la stringa cancellata */
  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };
}