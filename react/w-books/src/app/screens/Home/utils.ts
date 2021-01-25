import Book from "../../../types/Book";
import { iCard } from '../../components/Card';

export function mapToCards(books: Book[]):iCard[] {
  return books ? books.map(book => ({
    id: book.id,
    imageUrl: book.imageUrl,
    title: book.title,
    subtitle: book.genre,
    props: [
      {
        propName: 'Autor del libro: ',
        value: book.author,
        keepVisibleSimple: true,
      },
      {
        propName: 'Editorial: ',
        value: book.editor,
      },
      {
        propName: 'Año de publicacion: ',
        value: `${book.year}`,
      }
    ]
  })) : [];
}
