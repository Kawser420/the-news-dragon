export interface Author {
  name: string;
  img: string;
  published_date: string;
}

export interface Rating {
  number: number;
}

export interface News {
  _id: string;
  title: string;
  details: string;
  image_url: string;
  author: Author;
  rating: Rating;
  total_view: number;
  category_id: string;
}
