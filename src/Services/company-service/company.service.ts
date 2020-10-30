import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Company } from 'src/app/Components/companies/company';
import { AlertService } from 'src/app/alert/alert.service';


@Injectable()
export class CompanyService{
  constructor(private http: HttpClient, private alertService: AlertService) { }
  getCompanies(): Observable<Array<Company>> {
    return this.http.get<Company[]>('http://localhost:8090/companies').pipe(
      catchError(e =>{
        this.alertService.error(`Error al consultar las compañias: "${e.message}"`,{autoClose:false,keepAfterRouteChange:false});
        return throwError(e);
      })
    );
  }


}
