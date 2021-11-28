import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  api = environment.apiUrlUser;

  constructor(private http: HttpClient) { }

  getUserData(){
    return this.http.get(this.api,).pipe(map(this.extractData),
    catchError(this.handleError<any>('Connection Failed')));
  }

  private handleError<T>( operation = 'operation', result?:T){
    return(error:any):Observable<T>=>{
      console.error(error);
      console.log( '${operation} failed: ${error.message}' )
      return of(result as T);
    }
  }

  sendUserData():Observable<any>{
    let data = {'username': 'navnath', 'phone': '7045774150', 'city':'pune', 'zip':'412311'}
    return this.http.post<any>(this.api, data ).pipe(tap(this.extractData),
    catchError(this.handleError<any>('Connection Failed')));
  }

  extractData(res: Response){
    let body = res;
    return body || {};
  }

}
