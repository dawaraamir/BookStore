import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

 
  books!: Book[];
  searchValue!: string;

  constructor(private data:DataService, private router:Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.data.fetchBooks().subscribe(
      response => {
        this.books = response;
        console.log(this.books);
      }
    );
  }

  viewBook(id: number){
    this.router.navigate(['view-book', id]);
  }

}
