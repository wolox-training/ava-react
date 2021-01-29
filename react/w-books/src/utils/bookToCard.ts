import Book from "../types/Book";
import { iCard } from '../app/components/Card';
import PATHS from "../app/components/Routes/paths";

export function bookToCard(book: Book): iCard {
  return book ? {
    ...book,
    subtitle: book.genre,
    to: PATHS.book.replace(':id', `${book.id}`),
    properties: [
      {
        propName: 'Book:AuthorLabel',
        value: book.author,
        keepVisibleSimple: true,
      },
      {
        propName: 'Book:EditorLabel',
        value: book.editor,
      },
      {
        propName: 'Book:YearLabel',
        value: `${book.year}`,
      }
    ]
  } : {};
}
