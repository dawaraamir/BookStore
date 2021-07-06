import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
 book = new Book();

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.data.fetchBookById(id).subscribe(
      response =>{
          this.book = response;
      },
      error => console.log(error)
    );
  }

}
