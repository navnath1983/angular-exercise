import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserInformationService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getToDo(){
    return this.http.get(this.apiUrl).pipe(map(this.extractData),
    catchError(this.handleError<any>('Did not get response')))
  }

  private handleError<T>(operation = 'operation', result?:T){
    return(error:any):Observable<T>=>{
      console.error(error);
      console.log( '${operation} failed: ${error.message}' )
      return of(result as T);
    }
  }

  extractData(res:Response){
    let body = res;
    return body || {};
  }
}
