import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }


  //Get all
  fetchBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`http://localhost:8080/bookstore/book`);
  }

  //POST
  addBook(book:Book){
      return this.http.post<Book>(`http://localhost:8080/bookstore/book`, book);
  }

  //Get Book By ID

  fetchBookById(id: number):Observable<Book>{
    return this.http.get<Book>(`http://localhost:8080/bookstore/book/${id}`);
  }

  //Delete a Book by ID
  deleteBook(id: number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/bookstore/book/${id}`);
  }

  editBook(id:number, book: Book):Observable<Book>{
      return this.http.put<Book>(`http://localhost:8080/bookstore/book/${id}`, book);
  }

}