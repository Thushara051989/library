import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { Book } from '../shared/book.model';
declare var M: any;
@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css'],
  providers:[BookService]
})
export class AddbooksComponent implements OnInit {

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshBookList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.bookService.selectedBook = {
      _id: '',
      title: '',
      author: '',
      about: ''
      
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.bookService.postBook(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBookList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.bookService.putBook(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBookList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  
  refreshBookList() {
    this.bookService.getBookList().subscribe((res) => {
      this.bookService.books = res as Book[];
    });
  }

  onEdit(emp: Book) {
    this.bookService.selectedBook = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bookService.deleteBook(_id).subscribe((res) => {
        this.refreshBookList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
