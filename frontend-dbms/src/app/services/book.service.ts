import { Injectable } from '@angular/core';
import {BookListResponse} from "../models/book-list-response";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  // searchBooks(title: string, page: number, size: number): Observable<{books: Book[], totalPages: number}> {
  //   const searchUrl = `${this.baseUrl}?title=${title}&page=${page}&size=${size}`
  //   return this.http.get<{books : Book[], totalPages: number}>(searchUrl);
  // }
  searchBooks(title: string, page: number, size: number): Observable<BookListResponse> {
    const searchUrl = `${this.baseUrl}?title=${encodeURIComponent(title)}&page=${page}&size=${size}`;
    return this.http.get<BookListResponse>(searchUrl);
  }

  getBookDetail(id: string): Observable<Book> {
    const detailUrl = `${this.baseUrl}/${id}`;
    return this.http.get<Book>(detailUrl);
  }
}

