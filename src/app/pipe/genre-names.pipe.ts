import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'genreNames' })
export class GenreNamesPipe implements PipeTransform {
  transform(genres: { name: string }[]): string {
    if (!genres || genres.length === 0) {
return '-';
}
    return genres.map((g) => g.name).join(', ');
  }
}
