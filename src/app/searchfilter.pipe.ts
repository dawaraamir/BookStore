import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Books: Book[], searchValue: string): Book[]  {
    if(!Books || !searchValue || searchValue=="Show All"){
      return Books;
    }
    return Books.filter(book =>
      book.category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      book.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}