import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProDetailsService {

  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProductDetails(id: number | string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error(error.message || 'Server error'));
      })
    );
  }
}
