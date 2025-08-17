
export interface BookType {
  id: number;
  title: string;
  author: string;
  genre: string;
}

export interface BookProps extends BookType {
  onAdd: (title: string) => void;
}

export interface BookListProps {
  books: BookType[];
  onAdd: (title: string) => void;
}

export interface ReadingListProps {
  books?: string[];
}



