import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  /* creo un nuovo impiegato*/
  user: Employee = new Employee("","","","");

  /*Innietto il servizio nel costruttore */
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  /* Observable */
  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

}
}