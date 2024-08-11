type Base = {
  createdAt: string;
  id: string;
  rev: string;
  type: string;
  updatedAt: string;
};

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface Post extends Base {
  author: Author;
  body: Block[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}
