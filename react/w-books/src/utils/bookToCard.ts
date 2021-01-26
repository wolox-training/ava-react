import Book from "../types/Book";
import { iCard } from '../app/components/Card';
import PATHS from "~components/Routes/paths";

export function bookToCard(book: Book): iCard {
  return {
    id: book.id,
    imageUrl: book.imageUrl,
    title: book.title,
    subtitle: book.genre,
    to: PATHS.book.replace(':id', `${book.id}`),
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
  };
}
