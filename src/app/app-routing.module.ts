import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path: 'book-list', component: BookListComponent},
  {path: 'view-book/:id', component: ViewBookComponent},
  {path: '**', redirectTo: 'book-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
