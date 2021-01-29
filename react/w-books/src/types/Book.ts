interface Book {
  id: number;
  author: string;
  title: string;
  imageUrl: string;
  editor: string;
  year: number;
  genre: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Book;
