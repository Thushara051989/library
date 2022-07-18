import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

import { Book } from './shared/book.model';

@Injectable()
export class BookService {
  selectedBook: any= Book ;
  books: any[] = []; ;
  readonly baseURL = 'http://localhost:4000/books';

  constructor(private http: HttpClient) { }

  postBook(emp: Book) {
    return this.http.post(this.baseURL, emp);
  }

  getBookList() {
    return this.http.get(this.baseURL);
  }

  putBook(emp: Book) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteBook(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}