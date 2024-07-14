import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductlistsService {

  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProductLIst(): Observable<any> {
    return this.http.get(this.url).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error(error.message || 'Server error'));
      })
    );
  }
}
