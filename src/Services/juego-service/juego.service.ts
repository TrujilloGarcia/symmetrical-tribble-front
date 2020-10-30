import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Game } from 'src/app/obj/game';
import { AlertService } from 'src/app/alert/alert.service';

@Injectable()
export class JuegoService {
  private urlServer: string = 'http://localhost:8090/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private alertService: AlertService) { }

  getJuegos(): Observable<Array<Game>> {
    return this.http.get<Game[]>('http://localhost:8090/juegos').pipe(
      catchError(e =>{
        this.alertService.error(`Error al consultar los juegos: "${e.message}"`,{autoClose:false,keepAfterRouteChange:false});
        return throwError(e);
      })
    );
  }
  update(juego: Game): Observable<Game> {
    return this.http.put<Game>(`${this.urlServer}juegos/${juego.idJuego}`, juego, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        this.alertService.error(`Error al editar los juegos: "${e.message}"`,{autoClose:false,keepAfterRouteChange:false});
        return throwError(e);
      })
    );
  }
  create(juego: Game): Observable<Game> {
    return this.http.post<Game>('http://localhost:8090/juegos', juego, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        this.alertService.error(`Error al crear los juegos: "${e.message}"`,{autoClose:false,keepAfterRouteChange:false});
        return throwError(e);
      })
    );
  }
  getJuego(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.urlServer}juegos/${id}`)
    .pipe(catchError(e  => {
      this.alertService.error(`Error al obtener el juego: "${e.message}"`,{autoClose:false,keepAfterRouteChange:false});
      return throwError(e);
    }))
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urlServer}juegos/${id}`,{headers: this.httpHeaders}).pipe(
      catchError(e => {
        this.alertService.error(`Error al editar los juegos: "${e.message}"`,{autoClose:false,keepAfterRouteChange:false});
        return throwError(e);
      })
    );
  }
}
